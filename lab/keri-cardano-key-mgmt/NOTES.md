# KERI + Cardano Ed25519 Key Management (Example)

This small Node.js project shows **one way** to manage a Cardano Ed25519 private key
as an **operational key** under a **KERI-style identity**.

It is intentionally minimal and file-based so you can read and adapt it.

## What this repo demonstrates

- A simple KERI-like **Key Event Log (KEL)** stored in `data/kel-<AID>.json`
- Creating a **root KERI AID** (inception event)
- Binding a **Cardano Ed25519 key** as an operational key for that AID (interaction event)
- Rotating the Cardano key (rotation event) while keeping the AID stable

⚠️ **Not production-ready**  
This is an educational example:
- No real KERI library is used.
- The “AID” format is illustrative only.
- Cardano keypair is just a generic Ed25519 keypair from `tweetnacl`.

In production you would:
- Use a real KERI implementation (KEL, witnesses, anchoring, etc.).
- Use hardware wallets / HSM / KMS for the Cardano key material.
- Use proper Cardano key derivation (CIP-1852, payment / stake keys, etc.).

## Files

- `package.json` — NPM metadata + dependency on `tweetnacl`.
- `src/keriStore.js` — dumb JSON file-based KEL store.
- `src/cardanoKeyManager.js` — functions to:
  - create a KERI AID (inception)
  - bind a Cardano key (interaction)
  - rotate a Cardano key (rotation)
- `src/demo.js` — a runnable demo script using `.then()` style.

## Quick start

```bash
npm install
npm start
```

You should see logs like:

- KERI AID created
- Cardano keypair generated + bound
- Key rotated with an extra event in the KEL

The KEL will be written to:

```text
./data/kel-<AID>.json
```

## Conceptual mapping

- **KERI AID** → the durable identity for your agent/org/co-op.
- **Cardano Ed25519 key** → an operational signing key used to sign transactions.
- **Interaction event with key_binding** → “This Cardano key is currently authorized.”
- **Rotation event** → “Old Cardano key revoked, new key now authorized.”

You can extend this to:
- Multiple operational keys
- Multi-sig controller AIDs
- Delegated worker AIDs (sub-agents)
- Anchoring the KEL into Cardano or another ledger for timestamping

---
