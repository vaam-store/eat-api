import {AuthenticationInput, AuthenticationResponse, AuthIdentityProviderService,} from "@medusajs/framework/types";
import {AbstractAuthModuleProvider} from "@medusajs/framework/utils";
import {MedusaError} from "@medusajs/utils";
import {Logger} from "@mikro-orm/core";
import {AuthenticationResponseJSON, RegistrationResponseJSON,} from "@simplewebauthn/server";
import WebAuthnApiService from "../webauthn-api/services/webauthn-api";

type InjectedDependencies = {
    logger: Logger;
    webauthn_api: WebAuthnApiService;
};

export class WebAuthnAuthService extends AbstractAuthModuleProvider {
    public static readonly identifier = "webauthn";
    public static readonly DISPLAY_NAME = "WebAuthn Authentication";
    protected readonly logger: Logger;
    protected readonly apiService: WebAuthnApiService;

    public constructor({logger, webauthn_api}: InjectedDependencies) {
        // @ts-ignore
        super(...arguments);

        this.logger = logger;
        this.apiService = webauthn_api;
    }

    /**
     * Register a new WebAuthn credential
     */
    public async register(
        {body}: AuthenticationInput,
        authIdentityProviderService: AuthIdentityProviderService
    ): Promise<AuthenticationResponse> {
        const data = body as unknown as RegistrationResponseJSON;

        if (!data) {
            return {
                success: false,
                error: "Missing required parameters",
            };
        }

        // Verify registration
        const created = await this.apiService.verifyRegistration(data);

        if (!created) {
            return {
                success: false,
                error: "Registration failed",
            };
        }

        return {
            success: true,
            authIdentity: created,
        };
    }

    /**
     * Authenticate a user with WebAuthn
     */
    public async authenticate(
        {body}: AuthenticationInput,
        authIdentityProviderService: AuthIdentityProviderService
    ): Promise<AuthenticationResponse> {
        const data = body as unknown as AuthenticationResponseJSON;

        if (!data) {
            return {
                success: false,
                error: "Missing required parameters",
            };
        }

        // Verify authentication
        const created = await this.apiService.verifyAuthentication(data);

        if (!created) {
            return {
                success: false,
                error: "Authentication failed",
            };
        }

        return {
            success: true,
            authIdentity: created,
        };
    }

    /**
     * Generate a new access token for a user
     */
    public async validateCallback(
        req: AuthenticationInput,
        authIdentityService: AuthIdentityProviderService
    ): Promise<AuthenticationResponse> {
        throw new MedusaError(
            MedusaError.Types.NOT_ALLOWED,
            "Webauthn does not support valdiateCallback. Use method `authenticate` instead."
        );
    }
}

export default WebAuthnAuthService;
