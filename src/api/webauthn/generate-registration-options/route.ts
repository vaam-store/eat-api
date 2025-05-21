import type {MedusaRequest, MedusaResponse} from '@medusajs/framework/http';
import {ContainerRegistrationKeys} from '@medusajs/utils';
import {GenerateRegistrationOptionWebAuthn, GenRegRes} from '../../../modules/webauthn-api/types';

export const POST = async (
    req: MedusaRequest<GenerateRegistrationOptionWebAuthn>,
    res: MedusaResponse<GenRegRes | { error: string }>
) => {
    const logger = req.scope.resolve(ContainerRegistrationKeys.LOGGER);
    const webauthnApi = req.scope.resolve('webauthn_api');

    try {
        const {options} = await webauthnApi.createRegistrationOptions(req.body);
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
