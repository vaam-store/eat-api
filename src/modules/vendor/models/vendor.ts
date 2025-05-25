import { model } from "@medusajs/framework/utils";

const Vendor = model.define("vendor", {
	id: model.id().primaryKey(),
	username: model.text().unique(),
	email: model.text(),
});

export default Vendor;
