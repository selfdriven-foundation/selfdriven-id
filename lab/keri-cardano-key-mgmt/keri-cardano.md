# Managing a Cardano Ed25519 Private Key Using KERI

This explains how to manage an **Ed25519 private key for a Cardano address** using **KERI** so the key becomes a **governed, rotatable operational key** instead of a fragile “naked key”.

---

## Why combine KERI + Cardano keys?

| Problem with a plain Cardano private key | What KERI fixes |
|-----------------------------------------|------------------|
| The key **is** the identity | The key is **assigned to** a durable identity |
| Key rotation breaks continuity | KERI retains continuity with a **rotation event** |
| Hard to revoke and prove it | **Revocation event** in KEL |
| Single point of failure | **Threshold controllers & multi-party governance** |
| No audit history | **Event log of key changes & delegations** |

KERI makes the Cardano key manageable across its full lifecycle — rotation, delegation, compromise recovery, continuity, and audit.

---

## Roles of keys (best-practice pattern)

| Role | Purpose | Managed by |
|------|---------|------------|
| **KERI controller keys** | Control identity + rotations | KERI KEL |
| **Operational keys** | Used for day-to-day signing | Delegated AIDs |
| **Cardano Ed25519 key** | Signs Cardano transactions | Bound as an operational key |

Instead of treating the Cardano signing key as the identity *itself*, it becomes an **operational key with authority granted through KERI**.

---

## Lifecycle flow using KERI

### 1️⃣ Inception — create durable identity

AID = keri:abcd…
Controller threshold = 2-of-3
Witnesses = 7 distributed watchers

Result: A stable identity not tied to one cryptographic key.

---

### 2️⃣ Delegated identity for Cardano operations

AID_cardano = keri:xyz…
Purpose = “sign Cardano transactions”
Delegated by = AID (delegation event)

Next, publish a **KERI interaction event** linking the Cardano public key:

PubKey_cardano = ed25519_pk…

At this point the Cardano keypair becomes an **operational key governed by KERI**.

---

### 3️⃣ Rotation of the Cardano signing key

When replacing the Cardano key (e.g., compromised, moved to hardware wallet):

1. Generate a new Ed25519 keypair securely
2. Publish a **rotation event** for `AID_cardano`:
   - includes the **new public key**
   - **revokes** the previous key
   - signed by the *currently valid operational key*

Identity continuity is preserved — the Cardano key changed, the **agent identity did not**.

---

## Example KERI event objects

### 🔗 Binding the Cardano key to the delegated AID
```jsonc
{
  "type": "interaction",
  "aid": "keri:xyz...",
  "purpose": "cardano/tx-signing",
  "key_binding": {
    "pubkey": "ed25519_pk1q9t4cm...",
    "curve": "ed25519",
    "network": "cardano-mainnet",
    "role": "transaction-signer"
  },
  "timestamp": "2025-11-26T01:14:00Z"
}

🔁 Later — rotation to a new key

{
  "type": "rotation",
  "aid": "keri:xyz...",
  "old_key": "ed25519_pk1q9t4cm...",
  "new_key": "ed25519_pk1k02wnj...",
  "reason": "hardware wallet replacement",
  "timestamp": "2026-01-03T08:22:09Z"
}

These events give any verifier a cryptographic proof of:
	•	public-key continuity,
	•	revocation of old keys,
	•	time-ordered control history.

⸻

Mental model summary

On Cardano: you still sign transactions with an Ed25519 private key.
Off-chain: KERI manages who is authorized to control that key, when, and why.

The benefits appear in governance, recovery, delegation, and auditability, not in Cardano transaction format.

⸻

Why this matters for production systems

Scenario	KERI advantage
Wallet key compromised	Rotate + revoke without losing identity
Moving to hardware wallet	Rotation event preserves authorship continuity
Multi-party organization wallet	Threshold governance (e.g., 3-of-5)
AI / bot wallet	Keys delegated & recoverable without deleting identity
Compliance / audit	Immutable proof of identity control timeline


⸻

One-sentence takeaway

KERI upgrades a Cardano private key from a single point of failure to a governed, rotatable operational signing key under a durable digital identity.

⸻

If you want next:
	•	YAML templates for the events
	•	Node.js .then() sample code binding / rotating Cardano keys
	•	Diagram version (Mermaid / SVG)
	•	Boilerplate for a “Cardano Ops Delegated AID” spec sheet

Happy to generate whichever works best next.

