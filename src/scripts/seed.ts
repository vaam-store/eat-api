import type {
	CreateInventoryLevelInput,
	ExecArgs,
} from "@medusajs/framework/types";
import {
	ContainerRegistrationKeys,
	Modules,
	ProductStatus,
} from "@medusajs/framework/utils";
import {
	createApiKeysWorkflow,
	createInventoryLevelsWorkflow,
	createProductCategoriesWorkflow,
	createProductsWorkflow,
	createRegionsWorkflow,
	createSalesChannelsWorkflow,
	createShippingOptionsWorkflow,
	createShippingProfilesWorkflow,
	createStockLocationsWorkflow,
	createTaxRegionsWorkflow,
	linkSalesChannelsToApiKeyWorkflow,
	linkSalesChannelsToStockLocationWorkflow,
	updateStoresWorkflow,
} from "@medusajs/medusa/core-flows";

const salesChannelDefaultName = "Default Sales Channel";

export default async function seedDemoData({ container }: ExecArgs) {
	const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
	const link = container.resolve(ContainerRegistrationKeys.LINK);
	const query = container.resolve(ContainerRegistrationKeys.QUERY);
	const fulfillmentModuleService = container.resolve(Modules.FULFILLMENT);
	const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL);
	const storeModuleService = container.resolve(Modules.STORE);

	const xafCountries = ["cm"];

	logger.info("Seeding store data...");
	const [store] = await storeModuleService.listStores();
	let defaultSalesChannels = await salesChannelModuleService.listSalesChannels({
		name: salesChannelDefaultName,
	});

	if (!defaultSalesChannels.length) {
		// create the default sales channel
		const { result: salesChannelResult } = await createSalesChannelsWorkflow(
			container,
		).run({
			input: {
				salesChannelsData: [
					{
						name: salesChannelDefaultName,
					},
				],
			},
		});
		defaultSalesChannels = salesChannelResult;
	}

	const [defaultSalesChannel] = defaultSalesChannels;

	await updateStoresWorkflow(container).run({
		input: {
			selector: { id: store.id },
			update: {
				supported_currencies: [
					{
						currency_code: "xaf",
						is_default: true,
					},
				],
				default_sales_channel_id: defaultSalesChannel.id,
			},
		},
	});
	logger.info("Seeding region data...");
	const {
		result: [xafRegion],
	} = await createRegionsWorkflow(container).run({
		input: {
			regions: [
				{
					name: "Central Africa",
					currency_code: "xaf",
					countries: xafCountries,
					payment_providers: ["pp_system_default"],
				},
			],
		},
	});
	logger.info("Finished seeding regions.");

	logger.info("Seeding tax regions...");
	await createTaxRegionsWorkflow(container).run({
		input: xafCountries.map((country_code) => ({
			country_code,
			provider_id: "tp_system",
		})),
	});
	logger.info("Finished seeding tax regions.");

	logger.info("Seeding stock location data...");
	const { result: stockLocationResult } = await createStockLocationsWorkflow(
		container,
	).run({
		input: {
			locations: [
				{
					name: "Bangangté Warehouse",
					address: {
						city: "Bangangté",
						country_code: "CM",
						address_1: "",
					},
				},
			],
		},
	});
	const stockLocation = stockLocationResult[0];

	await link.create({
		[Modules.STOCK_LOCATION]: {
			stock_location_id: stockLocation.id,
		},
		[Modules.FULFILLMENT]: {
			fulfillment_provider_id: "manual_manual",
		},
	});

	logger.info("Seeding fulfillment data...");
	const shippingProfiles = await fulfillmentModuleService.listShippingProfiles({
		type: "default",
	});
	let shippingProfile = shippingProfiles.length ? shippingProfiles[0] : null;

	if (!shippingProfile) {
		const { result: shippingProfileResult } =
			await createShippingProfilesWorkflow(container).run({
				input: {
					data: [
						{
							name: "Default Shipping Profile",
							type: "default",
						},
					],
				},
			});
		shippingProfile = shippingProfileResult[0];
	}

	const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
		name: "Central Africa Warehouse delivery",
		type: "shipping",
		service_zones: [
			{
				name: "Central Africa",
				geo_zones: [
					{
						country_code: "cm",
						type: "country",
					},
				],
			},
		],
	});

	await link.create({
		[Modules.STOCK_LOCATION]: {
			stock_location_id: stockLocation.id,
		},
		[Modules.FULFILLMENT]: {
			fulfillment_set_id: fulfillmentSet.id,
		},
	});

	await createShippingOptionsWorkflow(container).run({
		input: [
			{
				name: "Standard Shipping",
				price_type: "flat",
				provider_id: "manual_manual",
				service_zone_id: fulfillmentSet.service_zones[0].id,
				shipping_profile_id: shippingProfile.id,
				type: {
					label: "Standard",
					description: "Ship in 2-3 days.",
					code: "standard",
				},
				prices: [
					{
						currency_code: "xaf",
						amount: 500,
					},
					{
						region_id: xafRegion.id,
						amount: 500,
					},
				],
				rules: [
					{
						attribute: "enabled_in_store",
						value: "true",
						operator: "eq",
					},
					{
						attribute: "is_return",
						value: "false",
						operator: "eq",
					},
				],
			},
			{
				name: "Express Shipping",
				price_type: "flat",
				provider_id: "manual_manual",
				service_zone_id: fulfillmentSet.service_zones[0].id,
				shipping_profile_id: shippingProfile.id,
				type: {
					label: "Express",
					description: "Ship in 24 hours.",
					code: "express",
				},
				prices: [
					{
						currency_code: "xaf",
						amount: 1_000,
					},
					{
						region_id: xafRegion.id,
						amount: 1_000,
					},
				],
				rules: [
					{
						attribute: "enabled_in_store",
						value: "true",
						operator: "eq",
					},
					{
						attribute: "is_return",
						value: "false",
						operator: "eq",
					},
				],
			},
		],
	});
	logger.info("Finished seeding fulfillment data.");

	await linkSalesChannelsToStockLocationWorkflow(container).run({
		input: {
			id: stockLocation.id,
			add: [defaultSalesChannel.id],
		},
	});
	logger.info("Finished seeding stock location data.");

	logger.info("Seeding publishable API key data...");
	const {
		result: [publishableApiKey],
	} = await createApiKeysWorkflow(container).run({
		input: {
			api_keys: [
				{
					title: "Client Key",
					type: "publishable",
					created_by: "",
				},
			],
		},
	});

	await linkSalesChannelsToApiKeyWorkflow(container).run({
		input: {
			id: publishableApiKey.id,
			add: [defaultSalesChannel.id],
		},
	});

	logger.info("Finished seeding publishable API key data.");

	const { result: categoryResult } = await createProductCategoriesWorkflow(
		container,
	).run({
		input: {
			product_categories: [
				{
					name: "Traditional Mains",
					is_active: true,
					description:
						"Hearty and classic main courses like Ndolé, Achu Soup, Fufu and Eru, and other staple Cameroonian dishes.",
				},
				{
					name: "Soups & Sauces",
					is_active: true,
					description:
						"A variety of flavorful soups and rich sauces to accompany your meals, including Pèpè Soup and groundnut sauce.",
				},
				{
					name: "Starches & Sides",
					is_active: true,
					description:
						"Essential accompaniments to main dishes, such as Fufu, Plantains, Rice, Cocoyam, and Miondo.",
				},
				{
					name: "Grilled Specialties",
					is_active: true,
					description:
						"Delicious grilled meats and fish, featuring popular options like Soya, Brochettes, and whole grilled fish.",
				},
				{
					name: "Street Food & Snacks",
					is_active: true,
					description:
						"Popular snacks and quick bites commonly found on the streets, including Puff-Puff and Accra Banana.",
				},
				{
					name: "Breakfast Menu",
					is_active: true,
					description:
						"Classic Cameroonian breakfast options to start your day, such as Beignets, boiled eggs, or hearty bean dishes.",
				},
				{
					name: "Beverages",
					is_active: true,
					description:
						"A selection of traditional and refreshing drinks, from local juices to popular bottled drinks.",
				},
				{
					name: "Vegetarian Options",
					is_active: true,
					description:
						"Plant-based dishes and meat-free versions of traditional Cameroonian cuisine.",
				},
				{
					name: "Combo Meals",
					is_active: true,
					description:
						"Curated combinations of popular main dishes and sides for a complete meal experience.",
				},
				{
					name: "Special Regional Dishes",
					is_active: true,
					description:
						"Highlighting unique and specialty dishes specific to the Bangangté/Bamileke region.",
				},
				{
					name: "Family-Size Portions",
					is_active: true,
					description:
						"Larger servings of popular dishes, perfect for sharing with family or groups.",
				},
				{
					name: "Quick Bites",
					is_active: true,
					description:
						"Fast and easy-to-order items for when you need a quick snack or light meal.",
				},
			],
		},
	});

	logger.info("Seeding inventory levels.");

	const { data: inventoryItems } = await query.graph({
		entity: "inventory_item",
		fields: ["id"],
	});

	const inventoryLevels: CreateInventoryLevelInput[] = [];
	for (const inventoryItem of inventoryItems) {
		const inventoryLevel: CreateInventoryLevelInput = {
			location_id: stockLocation.id,
			stocked_quantity: 1_000_000,
			inventory_item_id: inventoryItem.id,
		};
		inventoryLevels.push(inventoryLevel);
	}

	await createInventoryLevelsWorkflow(container).run({
		input: {
			inventory_levels: inventoryLevels,
		},
	});

	logger.info("Finished seeding inventory levels data.");
}
