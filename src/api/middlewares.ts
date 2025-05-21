import {authenticate, defineMiddlewares,} from "@medusajs/framework/http"

export default defineMiddlewares({
    routes: [
        {
            matcher: "/custom*",
            middlewares: [
                authenticate(["user", "customer"], ["session", "bearer"])
            ],
        },
    ],
})