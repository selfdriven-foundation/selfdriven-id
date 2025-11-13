---
layout: default
title: SSI | selfdrivenID
permalink: /ssi/
---

## SSI Methods

| **Name Format** | **Description** |
|:-----------------|:-----------------|
| did:selfdriven:[Ed25519-public-key\|base58] | Ed25519 public key encoded into Base58 |
| did:selfdriven:anon:[Ed25519-public-key\|hash-blake2b] | Ed25519 public key hashed using Blake2b |
| did:selfdriven:sdi:[SDI] | The selfdriven SDI assigned to each community member. It uses the common UUID format. e.g. ddea7071-c37b-4c3f-ab69-603870f5c9f6 |
| did:selfdriven:sdi:anon:[SDI\|hash-sha256] | The SHA256 hashed selfdriven SDI assigned to each community member |
| did:selfdriven:cardano:[bip32-address] | Uses the [Cardano](https://selfdriven.fyi/on-chain) key/hash/addressing based on BIP32-Ed25519 |
| did:selfdriven:webauthn:[webauthn-passkey-publickey] | Uses the WebAuthN ES256 (ECDSA w/ P-256 and SHA-256) |

## Related

- [KERI & SSI](/ssi/keri)