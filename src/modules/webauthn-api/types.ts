export type GenerateRegistrationOptionWebAuthn = {
    user_id?: string;

    /**
     * The username to be used for the registration.
     * This is optional and should not be used if the
     * userId is provided.
     */
    user_name: string;
};

export type GenerateAuthenticationOptionWebAuthn = {
    userId: string;
    selectCredentialId?: string[];
};

export type GenRegRes = {
    options: PublicKeyCredentialCreationOptionsJSON;
}

export type GenAuthRes = {
    options: PublicKeyCredentialRequestOptionsJSON;
}