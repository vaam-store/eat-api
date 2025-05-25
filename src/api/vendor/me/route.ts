import type {
	AuthenticatedMedusaRequest,
	MedusaResponse,
} from "@medusajs/framework/http";

export async function GET(
	req: AuthenticatedMedusaRequest,
	res: MedusaResponse,
): Promise<void> {
	const query = req.scope.resolve("query");
	const vendorId = req.auth_context?.actor_id;

	const {
		data: [vendor],
	} = await query.graph(
		{
			entity: "vendor",
			fields: ["*"],
			filters: {
				id: vendorId,
			},
		},
		{
			throwIfKeyNotFound: true,
		},
	);

	res.json({ vendor });
}
