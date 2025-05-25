import { Module } from "@medusajs/framework/utils";
import VendorModuleService from "./service";

export default Module("vendor", {
	service: VendorModuleService,
});
