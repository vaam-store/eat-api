import {MedusaService} from "@medusajs/framework/utils";
import {WebAuthnCredential} from "../models/webauthn-credential";
import {AuthIdentityDTO} from "@medusajs/framework/types";
import {
    AuthenticationResponseJSON, generateAuthenticationOptions,
    generateRegistrationOptions,
    RegistrationResponseJSON,
} from "@simplewebauthn/server";
import {Logger} from "@mikro-orm/core";
import {
    GenAuthRes,
    GenerateAuthenticationOptionWebAuthn,
    GenerateRegistrationOptionWebAuthn,
    GenRegRes
} from "../types";

type WebAuthnOptions = {
    rpID: string;
    rpName: string;
    origin: string;
};

type InjectedDependencies = {
    logger: Logger;
};

export class WebAuthnApiService extends MedusaService({
    WebAuthnCredential,
}) {
    public static readonly identifier = "webauthn_api";
    protected readonly options: WebAuthnOptions;
    protected readonly logger: Logger;

    public constructor({logger}: InjectedDependencies, options: WebAuthnOptions) {
        // @ts-ignore
        super(...arguments);

        this.logger = logger;
        this.options = {
            rpID: options.rpID || "localhost",
            rpName: options.rpName || "Medusa",
            origin: options.origin || "http://localhost:9000",
        };
    }

    static validateOptions(options: WebAuthnOptions) {
        if (!options.rpID) {
            throw new Error("Missing required option: rpID");
        }

        if (!options.rpName) {
            throw new Error("Missing required option: rpName");
        }

        if (!options.origin) {
            throw new Error("Missing required option: origin");
        }
    }

    /**
     * Create registration
     */
    public async createRegistrationOptions(
        {user_name}: GenerateRegistrationOptionWebAuthn,
    ): Promise<GenRegRes> {
        const options: PublicKeyCredentialCreationOptionsJSON = await generateRegistrationOptions({
            rpName: this.options.rpName,
            rpID: this.options.rpID,
            userName: user_name,
            // Don't prompt users for additional information about the authenticator
            // (Recommended for smoother UX)
            attestationType: 'none',
            // TODO Prevent users from re-registering existing authenticators
            // excludeCredentials: userPasskeys.map(passkey => ({
            //     id: passkey.id,
            //     // Optional
            //     transports: passkey.transports,
            // })),
            // See "Guiding use of authenticators via authenticatorSelection" below
            authenticatorSelection: {
                // Defaults
                residentKey: 'preferred',
                userVerification: 'preferred',
                // Optional
                authenticatorAttachment: 'platform',
            },
        });

        return {options};
    }

    /**
     * Create authentication
     */
    public async createAuthenticationOptions(
        {userId}: GenerateAuthenticationOptionWebAuthn,
    ): Promise<GenAuthRes> {
        const options: PublicKeyCredentialRequestOptionsJSON = await generateAuthenticationOptions({
            rpID: this.options.rpID,
            // TODO Require users to use a previously-registered authenticator
            // allowCredentials: userPasskeys.map(passkey => ({
            //     id: passkey.id,
            //     transports: passkey.transports,
            // })),
        });

        return {options};
    }

    /**
     * Verify registration
     */
    public async verifyRegistration(
        data: RegistrationResponseJSON
    ): Promise<AuthIdentityDTO> {
        throw new Error("-->> not implemented");
    }

    /**
     * Verify authentication
     */
    public async verifyAuthentication(
        data: AuthenticationResponseJSON
    ): Promise<AuthIdentityDTO> {
        throw new Error("-->> not implemented");
    }
}

export default WebAuthnApiService;
