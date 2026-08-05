---
layout: selfdriven
title: KERI & MLS | selfdrivenID
permalink: /ssi/keri/mls
---

# SSI, KERI & MLS
## A Reference Architecture for Secure Identity-Centric Group Communication

### Abstract

Identity and secure communication are often treated as separate concerns. Identity systems establish *who* is participating, while secure messaging systems establish *how* participants communicate confidentially.

This paper proposes an architecture that combines the **Key Event Receipt Infrastructure (KERI)** as the long-lived identity, authentication, and trust layer with **Messaging Layer Security (MLS)** as the dynamic group key management and encryption layer.

The result is an architecture supporting:

- Self-sovereign identities.
- Cryptographic agility.
- Forward secrecy.
- Post-compromise security.
- Efficient group messaging.
- Verifiable membership.
- Continuous key rotation.
- Decentralised trust without dependence on certificate authorities.

---

# 1. Motivation

Most secure messaging systems solve only part of the problem.

Traditional PKI provides:

- identity
- certificates
- revocation

but depends upon trusted certificate authorities.

MLS provides:

- scalable encrypted group communication
- forward secrecy
- efficient member changes

but intentionally leaves identity management outside its scope.

KERI provides:

- decentralised identifiers
- autonomous key rotation
- immutable key event logs
- verifiable controller history

Together these technologies naturally complement one another.

---

# 2. Architectural Layers

```
+--------------------------------------+
| Applications                         |
+--------------------------------------+
| MLS Group State                      |
+--------------------------------------+
| Group Encryption                     |
| AES-GCM / ChaCha20                   |
+--------------------------------------+
| MLS Ratchet Tree                     |
| X25519 / ML-KEM                      |
+--------------------------------------+
| KERI Identity Layer                  |
| AIDs / KELs / Witnesses              |
+--------------------------------------+
| Storage / Network                    |
+--------------------------------------+
```

Responsibilities are clearly separated.

KERI answers:

> Who are you?

MLS answers:

> What is the current shared encryption state?

---

# 3. Identity

Each participant owns a KERI Autonomous Identifier (AID).

Example:

```
Alice

AID
 ├── Current Signing Key
 ├── Next Key Commitment
 ├── KEL
 └── Witness Receipts
```

The KEL becomes the authoritative source describing:

- current signing key
- rotation history
- revocations
- delegation
- recovery

MLS never manages identity.

Instead, it simply references KERI identities.

---

# 4. Encryption Keys

Each identity maintains two classes of keys.

## Identity Keys

Used for:

- authentication
- signatures
- KEL events

Typically:

```
Ed25519
```

---

## Encryption Keys

Used for:

- MLS key agreement
- group encryption

Typically:

```
X25519
```

Future versions may use:

```
ML-KEM
```

for post-quantum protection.

---

# 5. Binding Encryption Keys

A participant publishes an MLS encryption key.

The encryption key is signed by the current KERI signing key.

```
KERI Signing Key
        │
        ▼
Signs MLS Public Key
        │
        ▼
Verified from KEL
```

This prevents attackers substituting fraudulent MLS keys.

---

# 6. Joining a Group

Suppose Alice creates a group.

```
Alice
 │
 ├── Creates MLS Group
 ├── Creates Epoch 1
 ├── Publishes Group Metadata
 └── Signs Invitation
```

Bob receives:

- Group ID
- Epoch
- Tree Information
- Alice's KERI AID

Bob performs:

1. Resolve Alice's KEL.
2. Verify current signing key.
3. Verify invitation signature.
4. Verify MLS encryption key.
5. Join group.

---

# 7. MLS Tree

Example:

```
               Root
             /      \
        Node AB    Node CD
        /    \      /    \
    Alice   Bob  Carol  Dave
```

Each leaf contains an MLS encryption key.

Each internal node contains derived secrets.

The root produces:

- Epoch Secret
- Application Secret
- Exporter Secret
- Confirmation Keys

---

# 8. Sending Messages

Application flow:

```
Application
      │
      ▼
MLS
      │
Epoch Secret
      │
      ▼
AES-256-GCM
      │
      ▼
Ciphertext
```

Messages are encrypted exactly once.

Every authorised member possesses the current epoch key.

---

# 9. Member Rotation

Suppose Alice rotates her KERI identity key.

```
KEL

Rotation Event
     │
     ▼
New Signing Key
```

Alice signs a new MLS encryption key.

MLS updates only the branch from Alice to the tree root.

The remainder of the tree remains unchanged.

---

# 10. Member Removal

Suppose Bob leaves.

```
Old

      Root
     /    \
   AB      CD
  /  \
A     B

New

      Root'
     /     \
    A      CD
```

MLS generates a new epoch.

Bob cannot derive future keys.

Forward secrecy is preserved.

---

# 11. Recovery

If an identity is compromised:

1. Recover KERI identifier.
2. Rotate signing key.
3. Publish new MLS encryption key.
4. MLS updates the affected branch.
5. New epoch generated.

No global certificate revocation is required.

---

# 12. Witness Integration

KERI witnesses provide independent verification that:

- membership changes occurred,
- rotations are valid,
- recovery events are authentic.

MLS therefore relies upon verified identities rather than blind trust.

---

# 13. Protocol Flow

```
Alice                    Bob

Resolve KEL
 │
Verify Identity
 │
Publish MLS Key
 │------------------------>
                      Verify KEL
                      Verify Signature
                      Join Group

MLS Tree Update
 │------------------------>
                      Update Tree

Epoch Secret
 │
AES-GCM
 │------------------------>
                      Decrypt
```

---

# 14. Post-Quantum Evolution

Current implementation:

```
Identity

Ed25519

Encryption

X25519
```

Migration path:

```
Identity

Ed25519

Encryption

Hybrid

X25519
+
ML-KEM
```

Eventually:

```
ML-DSA
+
ML-KEM
```

without changing the overall architecture.

---

# 15. Advantages

## Decentralised Identity

No certificate authorities.

No central identity provider.

---

## Cryptographic Agility

Algorithms may be upgraded independently.

---

## Forward Secrecy

Old messages remain protected after key compromise.

---

## Post-Compromise Security

Future epochs become secure following recovery.

---

## Efficient Scaling

Membership updates affect only a logarithmic portion of the MLS tree.

---

## Continuous Key Rotation

KERI rotation integrates naturally with MLS epoch updates.

---

## Auditability

Identity changes are permanently recorded within KERI Key Event Logs.

---

# 16. Reference Implementation

A Node.js reference implementation could consist of:

```
packages/

keri/
    aid.js
    kel.js
    rotation.js
    witnesses.js

mls/
    tree.js
    epoch.js
    ratchet.js
    secrets.js

crypto/
    x25519.js
    ed25519.js
    hkdf.js
    aesgcm.js

transport/
    websocket.js
    didcomm.js

storage/
    sqlite.js
```

The initial implementation can rely entirely on Node.js' native `crypto` module for Ed25519, X25519, HKDF and AES-GCM, allowing a working prototype with no external cryptographic dependencies.

---

# Conclusion

KERI and MLS address complementary problems. KERI establishes durable, decentralised identity with verifiable key lifecycle management, while MLS provides efficient, forward-secret group encryption with scalable membership changes.

By binding MLS encryption keys to KERI identities and using KERI events to authenticate joins, rotations, recoveries and removals, organisations can build secure collaboration platforms that avoid traditional certificate authorities while retaining strong cryptographic guarantees.

The resulting architecture separates identity from confidentiality, enabling each layer to evolve independently while providing a cohesive foundation for secure decentralised collaboration.