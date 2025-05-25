import {
	type MedusaNextFunction,
	type MedusaRequest,
	type MedusaResponse,
	authenticate,
	defineMiddlewares,
} from "@medusajs/framework/http";
import type { ConfigModule } from "@medusajs/types";
import { parseCorsOrigins } from "@medusajs/utils";
import cors from "cors";

export default defineMiddlewares({
	routes: [
		{
			matcher: "/custom*",
			middlewares: [authenticate(["user", "customer"], ["session", "bearer"])],
		},
		{
			matcher: "/auth/customer/webauthn/*",
			middlewares: [
				(req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
					const configModule: ConfigModule = req.scope.resolve("configModule");

					return cors({
						origin: parseCorsOrigins(configModule.projectConfig.http.storeCors),
						credentials: true,
					})(req, res, next);
				},
			],
		},
		{
			matcher: "/webauthn*",
			middlewares: [
				(req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
					const configModule: ConfigModule = req.scope.resolve("configModule");

					return cors({
						origin: parseCorsOrigins(configModule.projectConfig.http.storeCors),
						credentials: true,
					})(req, res, next);
				},
			],
		},
	],
});
