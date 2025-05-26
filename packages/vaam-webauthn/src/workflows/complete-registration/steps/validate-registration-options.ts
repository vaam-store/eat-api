import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk';
import type { RegistrationResponseJSON } from '@simplewebauthn/types';
import WebAuthnApiService from '../../../modules/webauthn-api/service';

export type ValidateRegistrationOptionsStepInput = {
	payload: RegistrationResponseJSON;
	authIdentityId: string;
};

const validateRegistrationOptionsStep = createStep(
	'validate-registration-options',
	async (
		{ authIdentityId, payload }: ValidateRegistrationOptionsStepInput,
		{ container },
	) => {
		const authService = container.resolve('auth');
		const webauthnApiService: WebAuthnApiService = container.resolve(
			WebAuthnApiService.identifier,
		);

		const authIdentity = await authService.retrieveAuthIdentity(authIdentityId);
		const success = await webauthnApiService.verifyRegistrationResponse({
			body: payload,
			authIdentity,
		});

		return new StepResponse(success);
	},
);

export default validateRegistrationOptionsStep;
