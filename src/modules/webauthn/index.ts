import WebAuthnAuthService from "./webauthn-auth";
import {ModuleProvider, Modules} from "@medusajs/framework/utils";

export default ModuleProvider(Modules.AUTH, {
    services: [WebAuthnAuthService],
});