import {
	WorkflowResponse,
	createWorkflow,
	transform,
} from '@medusajs/framework/workflows-sdk';
import {
	setAuthAppMetadataStep,
	useQueryGraphStep,
} from '@medusajs/medusa/core-flows';
import type { Vendor } from '../../modules/marketplace/models/vendor';
import createVendorStep from './steps/create-vendor';
import createVendorAdminStep from './steps/create-vendor-admin';

export type CreateVendorWorkflowInput = {
	name: string;
	handle?: string;
	logo?: string;
	admin: {
		email: string;
		first_name?: string;
		last_name?: string;
	};
	authIdentityId: string;
};

const createVendorWorkflow = createWorkflow(
	'create-vendor',
	(input: CreateVendorWorkflowInput) => {
		const vendor = createVendorStep({
			name: input.name,
			handle: input.handle,
			logo: input.logo,
		});

		const vendorAdminData = transform(
			{
				input,
				vendor,
			},
			(data) => {
				return {
					...data.input.admin,
					vendor_id: data.vendor.id,
				};
			},
		);

		const vendorAdmin = createVendorAdminStep(vendorAdminData);

		setAuthAppMetadataStep({
			authIdentityId: input.authIdentityId,
			actorType: 'vendor',
			value: vendorAdmin.id,
		});

		const { data: vendorWithAdmin } = useQueryGraphStep({
			entity: 'vendor',
			fields: ['id', 'name', 'handle', 'logo', 'admins.*'],
			filters: {
				id: vendor.id,
			},
		});

		return new WorkflowResponse({
			vendor: vendorWithAdmin[0] as Vendor,
		});
	},
);

export default createVendorWorkflow;
