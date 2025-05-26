import process from "node:process";
import { SearchUtils, defineConfig, loadEnv } from "@medusajs/framework/utils";
import type { ManualChunkMeta } from "rollup";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
	featureFlags: {},
	admin: {
		storefrontUrl: process.env.STOREFRONT_URL,
		disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
		path: `/${process.env.NODE_ENV === "production" ? "" : "app"}`,
		backendUrl: process.env.BACKEND_URL,
		vite:
			process.env.NODE_ENV === "production"
				? (config) => {
					const legacy = require("@vitejs/plugin-legacy");
					const { VitePWA } = require("vite-plugin-pwa");
					const { robots } = require("vite-plugin-robots");
					const {
						webUpdateNotice,
					} = require("@plugin-web-update-notification/vite");

					return {
						...config,
						optimizeDeps: {
							include: ["qs"],
						},
						plugins: config.plugins.concat([
							legacy({
								targets: ["defaults", "not IE 11"],
							}),
							robots({
								robotsDir: __dirname,
							}),
							webUpdateNotice({
								logVersion: true,
							}),
							VitePWA({
								registerType: "autoUpdate",
								injectRegister: "auto",
								manifest: {
									name: "Vaam Admin",
									short_name: "Vadmin",
									theme_color: "#ffffff",
									background_color: "#ffffff",
									display: "standalone",
									start_url: "/",
								},
								workbox: {
									maximumFileSizeToCacheInBytes: 5_000_000,
								},
							}),
						]),
						build: {
							sourcemap: false,
							chunkSizeWarningLimit: 1600,
							rollupOptions: {
								output: {
									manualChunks: (id: string, _meta: ManualChunkMeta) => {
										if (id.includes("node_modules")) {
											const cleanName: string = id
												.toString()
												.split("node_modules/")[1]
												.split("/")[0]
												.toString();

											return btoa(cleanName).replace(/=/g, "");
										}
									},
								},
							},
						},
					};
				}
				: (config) => ({
					...config,
					optimizeDeps: {
						include: ["qs"],
					},
				}),
	},
	plugins: [
		{
			resolve: "@vymalo/medusa-marketplace",
			options: {},
		},
		{
			resolve: "@vymalo/medusa-meilisearch",
			options: {},
		},
		{
			resolve: "@vymalo/medusa-wishlist",
			options: {},
		},
		{
			resolve: "@vymalo/medusa-webauthn",
			options: {},
		},
	],
	projectConfig: {
		databaseUrl: process.env.DATABASE_URL,
		redisUrl: process.env.REDIS_URL,
		redisPrefix: process.env.REDIS_URL || "medusa:",
		workerMode: process.env.MEDUSA_WORKER_MODE as
			| "shared"
			| "worker"
			| "server",
		sessionOptions: {
			name: process.env.SESSION_NAME || "eat.vaam.medusa.sid",
			rolling: process.env.ROLLING_SESSION === "true",
		},
		http: {
			storeCors: process.env.STORE_CORS!,
			adminCors: process.env.ADMIN_CORS!,
			authCors: process.env.AUTH_CORS!,
			jwtSecret: process.env.JWT_SECRET!,
			cookieSecret: process.env.COOKIE_SECRET!,
			authMethodsPerActor: {
				user: ["emailpass"],
				customer: ["vaam-oauth2", "vaam-webauthn"],
				vendor: ["vaam-oauth2", "vaam-webauthn"],
			},
		},
	},
	modules: [
		{
			resolve: "@medusajs/medusa/cache-redis",
			options: {
				redisUrl: process.env.REDIS_URL,
			},
		},
		{
			resolve: "@medusajs/medusa/event-bus-redis",
			options: {
				redisUrl: process.env.REDIS_URL,
			},
		},
		{
			resolve: "@medusajs/medusa/workflow-engine-redis",
			options: {
				redis: {
					url: process.env.REDIS_URL,
				},
			},
		},
		{
			resolve: "@medusajs/medusa/file",
			options: {
				providers: [
					{
						resolve: "@vymalo/medusa-minio",
						id: "minio",
						options: {
							endpoint: process.env.MINIO_ENDPOINT,
							cdn_url: process.env.MINIO_CDN_URL,
							bucket: process.env.MINIO_BUCKET,
							private_bucket: process.env.MINIO_PRIVATE_BUCKET?.length
								? process.env.MINIO_PRIVATE_BUCKET
								: process.env.MINIO_BUCKET,
							access_key_id: process.env.MINIO_ACCESS_KEY,
							secret_access_key: process.env.MINIO_SECRET_KEY,
							download_url_duration: 60,
						},
					},
				],
			},
		},
		{
			resolve: "@medusajs/medusa/payment",
			options: {
				providers: [
					{
						resolve: "@medusajs/medusa/payment-stripe",
						id: "stripe",
						options: {
							apiKey: process.env.STRIPE_API_KEY,
						},
					},
				],
			},
		},
		{
			resolve: "@medusajs/medusa/locking",
			options: {
				providers: [
					{
						resolve: "@medusajs/medusa/locking-redis",
						id: "locking-redis",
						options: {
							redisUrl: process.env.REDIS_URL,
						},
						is_default: true,
					},
				],
			},
		},
		{
			resolve: "@medusajs/medusa/fulfillment",
			options: {
				providers: [
					{
						resolve: `@medusajs/medusa/fulfillment-manual`,
						id: "manual",
						options: {},
					},
				],
			},
			dependencies: [],
		},
		{
			resolve: "@medusajs/medusa/auth",
			options: {
				providers: [
					{
						resolve: "@vymalo/medusa-keycloak",
						id: "vaam-oauth2",
						options: {
							url: process.env.KEYCLOAK_URL,
							realm: process.env.KEYCLOAK_REALM,
							clientId: process.env.KEYCLOAK_CLIENT_SECRET,
							clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
						},
					},
					{
						resolve: "@vymalo/medusa-webauthn/auth",
						id: "vaam-webauthn",
						options: {},
					},
					{
						resolve: "./src/modules/argon-emailpass",
						id: "emailpass",
						options: {
							argon2: {
								hashLength: process.env.ARGON_HASH_LENGTH,
								parallelism: process.env.ARGON_PARALLELISM,
							}
						},
					},
				],
			},
		},
		{
			resolve: "@vymalo/medusa-meilisearch",
			options: {
				config: {
					host: process.env.MEILISEARCH_HOST,
					apiKey: process.env.MEILISEARCH_API_KEY,
				},
				settings: {
					[SearchUtils.indexTypes.PRODUCTS]: {
						indexSettings: {
							searchableAttributes: ["title", "description", "variant_sku"],
							displayedAttributes: [
								"title",
								"description",
								"variant_sku",
								"thumbnail",
								"handle",
							],
						},
						primaryKey: "id",
					},
				},
			},
		},
	],
});
