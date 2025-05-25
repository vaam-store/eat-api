import { MedusaService } from "@medusajs/framework/utils";
import type { Logger } from "@mikro-orm/core";
import Vendor from "./models/vendor";

type InjectedDependencies = {
	logger: Logger;
};

class VendorModuleService extends MedusaService({
	Vendor,
}) {
	public static readonly identifier = "vendor";
	protected readonly logger: Logger;

	public constructor({ logger }: InjectedDependencies) {
		// @ts-ignore
		super(...arguments);

		this.logger = logger;
	}
}

export default VendorModuleService;
