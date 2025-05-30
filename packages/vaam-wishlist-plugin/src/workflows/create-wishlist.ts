import {
	WorkflowResponse,
	createWorkflow,
} from '@medusajs/framework/workflows-sdk';
import { createWishlistStep } from './steps/create-wishlist';
import { validateCustomerCreateWishlistStep } from './steps/validate-customer-create-wishlist';

type CreateWishlistWorkflowInput = {
	customer_id: string;
	sales_channel_id: string;
};

export const createWishlistWorkflow = createWorkflow(
	'create-wishlist',
	(input: CreateWishlistWorkflowInput) => {
		validateCustomerCreateWishlistStep({
			customer_id: input.customer_id,
		});

		const wishlist = createWishlistStep(input);

		return new WorkflowResponse({
			wishlist,
		});
	},
);
