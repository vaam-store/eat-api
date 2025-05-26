import { authenticate, defineMiddlewares } from "@medusajs/framework/http";

export default defineMiddlewares({
	routes: [
		{
			matcher: "/webauthn/start-registration",
			method: ["POST"],
			middlewares: [
				authenticate("vendor", ["session", "bearer"], {
					allowUnregistered: true,
				}),
			],
		},
		{
			matcher: "/webauthn/complete-registration",
			method: ["POST"],
			middlewares: [
				authenticate("vendor", ["session", "bearer"], {
					allowUnregistered: true,
				}),
			],
		},
		{
			matcher: "/webauthn/start-authentication",
			method: ["POST"],
		},
	],
});
