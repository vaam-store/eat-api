# WebAuthn Authentication Module for Medusa

This module provides WebAuthn (Web Authentication) support for Medusa, allowing passwordless authentication using security keys, biometrics, and platform authenticators.

## Features

- Register WebAuthn credentials for users
- Authenticate users with WebAuthn
- Store and manage WebAuthn credentials
- Support for multiple credentials per user
- Compatible with Medusa's Auth Module

## Installation

The WebAuthn module is already integrated into the Medusa application. It's configured in the `medusa-config.ts` file as an auth provider.

## Configuration

The WebAuthn module can be configured with the following options:

```typescript
{
  resolve: './src/modules/webauthn',
  id: 'webauthn',
  options: {
    // Configure the RP ID (defaults to the domain name)
    rpID: process.env.WEBAUTHN_RP_ID || 'localhost',
    // Configure the RP name (defaults to 'Medusa')
    rpName: process.env.WEBAUTHN_RP_NAME || 'Medusa Store',
    // Configure the RP origin (defaults to 'https://localhost')
    origin: process.env.WEBAUTHN_ORIGIN || 'http://localhost:9000',
  },
}
```

## Environment Variables

The following environment variables can be used to configure the WebAuthn module:

- `WEBAUTHN_RP_ID`: The Relying Party ID (defaults to 'localhost')
- `WEBAUTHN_RP_NAME`: The Relying Party name (defaults to 'Medusa Store')
- `WEBAUTHN_ORIGIN`: The Relying Party origin (defaults to 'http://localhost:9000')

## API Routes

### Registration

#### Generate Registration Options

```
GET /store/webauthn?userId=<userId>&username=<username>
```

This endpoint generates registration options for a user. The options include a challenge that will be used to verify the registration.

#### Verify Registration

```
POST /store/webauthn
```

Request body:
```json
{
  "userId": "user-id",
  "username": "username",
  "response": {
    // WebAuthn registration response
  }
}
```

This endpoint verifies the registration response and stores the credential.

### Authentication

#### Generate Authentication Options

```
GET /store/webauthn/auth?username=<username>
```

This endpoint generates authentication options for a user. The options include a challenge that will be used to verify the authentication.

#### Verify Authentication

```
POST /store/webauthn/auth
```

Request body:
```json
{
  "username": "username",
  "response": {
    // WebAuthn authentication response
  }
}
```

This endpoint verifies the authentication response and returns the user ID if successful.

## Usage in Frontend

### Registration

1. Call the registration options endpoint to get the options
2. Use the `@simplewebauthn/browser` library to create a credential
3. Send the credential to the verify registration endpoint

```javascript
import { startRegistration } from '@simplewebauthn/browser';

// Step 1: Get registration options
const optionsResponse = await fetch(
  `/store/webauthn?userId=${userId}&username=${username}`
);
const options = await optionsResponse.json();

// Step 2: Create credential
const credential = await startRegistration(options);

// Step 3: Verify registration
const verificationResponse = await fetch('/store/webauthn', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId,
    username,
    response: credential,
  }),
});

const verification = await verificationResponse.json();
if (verification.success) {
  console.log('Registration successful!');
}
```

### Authentication

1. Call the authentication options endpoint to get the options
2. Use the `@simplewebauthn/browser` library to get an assertion
3. Send the assertion to the verify authentication endpoint

```javascript
import { startAuthentication } from '@simplewebauthn/browser';

// Step 1: Get authentication options
const optionsResponse = await fetch(
  `/store/webauthn/auth?username=${username}`
);
const options = await optionsResponse.json();

// Step 2: Get assertion
const assertion = await startAuthentication(options);

// Step 3: Verify authentication
const verificationResponse = await fetch('/store/webauthn/auth', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username,
    response: assertion,
  }),
});

const verification = await verificationResponse.json();
if (verification.success) {
  console.log('Authentication successful!');
  console.log('User ID:', verification.userId);
}
```

## Integration with Medusa Auth Module

The WebAuthn module is integrated with Medusa's Auth Module as an authentication provider. It's configured in the `medusa-config.ts` file:

```typescript
{
  resolve: '@medusajs/medusa/auth',
  options: {
    providers: [
      {
        resolve: './src/modules/webauthn',
        id: 'webauthn',
        options: {
          // WebAuthn options
        },
      },
      // Other auth providers
    ],
  },
}
```

The Auth Module is configured to use WebAuthn for customer authentication:

```typescript
authMethodsPerActor: {
  user: ['emailpass'],
  customer: ['webauthn'],
  vendor: ['webauthn'],
}
```

## Data Model

The WebAuthn module uses the `webauthn_credential` data model to store credentials:

```typescript
export const WebAuthnCredential = model.define("webauthn_credential", {
  id: model.id().primaryKey(),
  userId: model.text(),
  username: model.text(),
  credentialId: model.text(),
  credentialPublicKey: model.text(),
  counter: model.number(),
  transports: model.text(),
})
```

## Dependencies

- `@simplewebauthn/server`: Server-side WebAuthn library
- `@simplewebauthn/browser`: Client-side WebAuthn library (for frontend)