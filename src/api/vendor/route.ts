import type {
	AuthenticatedMedusaRequest,
	MedusaResponse,
} from "@medusajs/framework/http";
import { MedusaError } from "@medusajs/framework/utils";
import createVendorWorkflow from "../../workflows/create-vendor";

type RequestBody = {
	username: string;
};

export async function POST(
	req: AuthenticatedMedusaRequest<RequestBody>,
	res: MedusaResponse,
) {
	// If `actor_id` is present, the request carries
	// authentication for an existing vendor
	if (req.auth_context?.actor_id) {
		throw new MedusaError(
			MedusaError.Types.INVALID_DATA,
			"Request already authenticated as a vendor.",
		);
	}

	const { result } = await createVendorWorkflow(req.scope).run({
		input: {
			vendor: {
				username: req.body.username,
				email: `${req.body.username}@vaam.eat`,
			},
			authIdentityId: req.auth_context.auth_identity_id,
		},
	});

	res.status(200).json({ vendor: result });
}
