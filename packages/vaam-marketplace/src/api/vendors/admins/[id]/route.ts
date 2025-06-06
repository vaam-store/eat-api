import type {
	AuthenticatedMedusaRequest,
	MedusaResponse,
} from '@medusajs/framework/http';
import { deleteVendorAdminWorkflow } from '../../../../workflows/delete-vendor-admin';

export const DELETE = async (
	req: AuthenticatedMedusaRequest,
	res: MedusaResponse,
) => {
	await deleteVendorAdminWorkflow(req.scope).run({
		input: {
			id: req.params.id,
		},
	});

	res.json({ message: 'success' });
};
