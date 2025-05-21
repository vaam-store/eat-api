import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
  type AuthenticationResponseJSON,
  type RegistrationResponseJSON,
  type GenerateAuthenticationOptionsOpts,
  type GenerateRegistrationOptionsOpts,
  type VerifyAuthenticationResponseOpts,
  type VerifyRegistrationResponseOpts,
} from '@simplewebauthn/server';

// Define our own AuthenticatorDevice interface
export interface AuthenticatorDevice {
  credentialID: Uint8Array;
  credentialPublicKey: Uint8Array;
  counter: number;
  transports?: string[];
}

// This should be the URL of your application
const rpID = process.env.WEBAUTHN_RP_ID || 'localhost';
const rpName = process.env.WEBAUTHN_RP_NAME || 'Vaam Eat';
const rpOrigin = process.env.WEBAUTHN_RP_ORIGIN || `https://${rpID}`;

// Helper function to generate registration options
export async function generateWebAuthnRegistrationOptions(
  userId: string,
  username: string,
  existingDevices: AuthenticatorDevice[] = []
) {
  const options: GenerateRegistrationOptionsOpts = {
    rpName,
    rpID,
    userID: Buffer.from(userId),
    userName: username,
    timeout: 60000,
    attestationType: 'none',
    excludeCredentials: existingDevices.map(device => ({
      id: device.credentialID,
      type: 'public-key',
      transports: device.transports,
    })),
    authenticatorSelection: {
      userVerification: 'preferred',
      residentKey: 'preferred',
    },
    supportedAlgorithmIDs: [-7, -257],
  };

  return generateRegistrationOptions(options);
}

// Helper function to verify registration response
export async function verifyWebAuthnRegistration(
  userId: string,
  response: RegistrationResponseJSON,
  expectedChallenge: string
) {
  const options: VerifyRegistrationResponseOpts = {
    response,
    expectedChallenge,
    expectedOrigin: rpOrigin,
    expectedRPID: rpID,
    requireUserVerification: false,
  };

  return verifyRegistrationResponse(options);
}

// Helper function to generate authentication options
export async function generateWebAuthnAuthenticationOptions(
  userDevices: AuthenticatorDevice[] = []
) {
  const options: GenerateAuthenticationOptionsOpts = {
    timeout: 60000,
    allowCredentials: userDevices.map(device => ({
      id: device.credentialID,
      type: 'public-key',
      transports: device.transports,
    })),
    userVerification: 'preferred',
    rpID,
  };

  return generateAuthenticationOptions(options);
}

// Helper function to verify authentication response
export async function verifyWebAuthnAuthentication(
  response: AuthenticationResponseJSON,
  expectedChallenge: string,
  authenticator: AuthenticatorDevice
) {
  const options: VerifyAuthenticationResponseOpts = {
    response,
    expectedChallenge,
    expectedOrigin: rpOrigin,
    expectedRPID: rpID,
    expectedAuthenticator: authenticator,
    requireUserVerification: false,
  };

  return verifyAuthenticationResponse(options);
}