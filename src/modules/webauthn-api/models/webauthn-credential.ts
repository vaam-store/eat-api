import { model } from "@medusajs/framework/utils"

export const WebAuthnCredential = model.define("webauthn_credential", {
  id: model.id().primaryKey(),
  userId: model.text(),
  username: model.text(),
  credentialId: model.text(),
  credentialPublicKey: model.text(),
  counter: model.number(),
  transports: model.text(),
})

export default WebAuthnCredential