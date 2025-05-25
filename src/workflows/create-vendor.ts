import {
	StepResponse,
	WorkflowResponse,
	createStep,
	createWorkflow,
} from "@medusajs/framework/workflows-sdk";
import { setAuthAppMetadataStep } from "@medusajs/medusa/core-flows";
import type VendorModuleService from "../modules/vendor/service";

type CreateVendorWorkflowInput = {
	vendor: {
		username: string;
		email: string;
	};
	authIdentityId: string;
};

const createVendorStep = createStep(
	"create-vendor-step",
	async (
		{ vendor: vendorData }: Pick<CreateVendorWorkflowInput, "vendor">,
		{ container },
	) => {
		const vendorModuleService: VendorModuleService =
			container.resolve("vendor");

		const vendor = await vendorModuleService.createVendors(vendorData);

		return new StepResponse(vendor);
	},
);

const createVendorWorkflow = createWorkflow(
	"create-vendor",
	(input: CreateVendorWorkflowInput) => {
		const vendor = createVendorStep({
			vendor: input.vendor,
		});

		setAuthAppMetadataStep({
			authIdentityId: input.authIdentityId,
			actorType: "vendor",
			value: vendor.id,
		});

		return new WorkflowResponse(vendor);
	},
);

export default createVendorWorkflow;
