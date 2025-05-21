import WebAuthnApiService from "./services/webauthn-api";
import {Module} from "@medusajs/framework/utils";

export default Module("webauthn_api", {
    service: WebAuthnApiService,
});