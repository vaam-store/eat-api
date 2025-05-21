import type {MedusaRequest, MedusaResponse} from '@medusajs/framework/http';
import {ContainerRegistrationKeys} from '@medusajs/utils';
import {GenAuthRes, GenerateAuthenticationOptionWebAuthn} from '../../../modules/webauthn-api/types';

export const POST = async (
    req: MedusaRequest<GenerateAuthenticationOptionWebAuthn>,
    res: MedusaResponse<GenAuthRes | { error: string }>
) => {
    const logger = req.scope.resolve(ContainerRegistrationKeys.LOGGER);
    const webauthnApi = req.scope.resolve('webauthn_api');

    try {
        const {options} = await webauthnApi.createAuthenticationOptions(req.body);
        res.json({
            options,
        });
    } catch (error) {
        logger.error(
            'Error occurred while processing the webhook data',
            error as Error
        );
        res
            .status(500)
            .send({error: 'An error occurred while processing the webhook data'});
    }
};
