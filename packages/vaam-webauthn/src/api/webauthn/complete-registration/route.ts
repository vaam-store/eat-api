import type {
	AuthenticatedMedusaRequest,
	MedusaResponse,
} from "@medusajs/framework/http";
import { MedusaError } from "@medusajs/framework/utils";
import type { RegistrationResponseJSON } from "@simplewebauthn/types";
import validateRegistrationOptionsWorkflow from "../../../workflows/complete-registration/index";

export const POST = async (
	req: AuthenticatedMedusaRequest<RegistrationResponseJSON>,
	res: MedusaResponse,
) => {
	if (req.auth_context?.actor_id) {
		throw new MedusaError(
			MedusaError.Types.INVALID_DATA,
			"Request already authenticated as a vendor.",
		);
	}

	const { result } = await validateRegistrationOptionsWorkflow(req.scope).run({
		input: {
			authIdentityId: req.auth_context.auth_identity_id,
			payload: req.validatedBody,
		},
	});

	res.json({
		result: result,
	});
};
