---
layout: default
title: SSI & KERI | selfdrivenID
permalink: /ssi/keri/
---

# SSI & KERI

KERI is part of the SSI ecosystem, but it isn’t owned by SSI.**  
It’s a foundational identity and trust layer that SSI systems can use to manage identifiers, keys, and credentials without relying on a blockchain.

## What is SSI?

SSI systems generally require:

1. **Identifiers**  
   Secure, persistent identifiers for people, orgs, and devices.

2. **Verifiable Data**  
   A way to issue and verify claims/credentials.

3. **Trust Infrastructure**  
   A mechanism for validating key history, rotation, and integrity without a central provider.

Traditional SSI relies on:
- DIDs  
- Verifiable Credentials  
- Blockchains or registries  
- PKI-based trust  
- Agents and wallets  

## Where KERI Fits

**KERI (Key Event Receipt Infrastructure)** provides a decentralized, portable trust layer for identifier and key management.  
It supplies features that classical DID methods don’t:

- **Self-certifying identifiers** (derived directly from keys)  
- **Verifiable key rotations**  
- **Immutable, hash-linked event history (DAG)**  
- **Witnessing and receipts instead of global ledgers**  
- **Fully portable identifiers and credentials**  
- **Ledger-optional architecture**

In SSI terms:
- KERI is a **DID method** (e.g., `did:keri:...`)  
- KERI provides the **trust substrate** for credentials  
- KERI is paired with **ACDC** as its native credential format

## Interoperability With SSI Standards

KERI works alongside or instead of other SSI components:

- W3C DIDs  
- W3C Verifiable Credentials  
- DIDComm  
- VC-JWT and LD-Signatures  
- Blockchain-anchored DID methods  
- Traditional ledgers and revocation registries

You can use KERI as:
- a DID method  
- a portable trust anchor  
- a key management and rotation engine  
- an identity substrate for organizations, devices, or humans  


## Mental Model

- **Blockchain SSI:** Trust is anchored in the ledger.  
- **KERI SSI:** Trust is anchored in the verifiable key event log.  
- **ACDC:** The verifiable data container layer on top of KERI.

Both are SSI — they just implement the trust layer differently.

## Summary

**Is KERI part of SSI?**  
Yes.  
It’s a modern and efficient approach that gives SSI:

- portable decentralized identifiers  
- verifiable rotations  
- self-certifying trust  
- ledger independence  
- a powerful credential layer (ACDC)

KERI = SSI without requiring a blockchain.

### Overview Diagram

                      +-----------------------------+
                      |        SSI Ecosystem        |
                      +-----------------------------+
                                /        \
                               /          \
                              /            \
                             v              v

                +------------------+    +-------------------+
                |   Identifiers    |    | Verifiable Data   |
                |   (DIDs, AIDs)   |    | (VCs, ACDCs)      |
                +------------------+    +-------------------+
                          |                      |
                          |                      |
                          v                      v

          +---------------------------------------------------+
          |        KERI: Key Event Receipt Infrastructure     |
          |---------------------------------------------------|
          | - Self-certifying identifiers (AIDs)              |
          | - Key events (inception, rotation, delegation)    |
          | - Witnessing & receipts                           |
          | - Immutable event DAG (KEL)                       |
          | - No blockchain required                          |
          +---------------------------------------------------+
                          |
                          |
                          v

                +---------------------------+
                |       ACDC Layer          |
                |  (Authentic Chained Data) |
                | - Credentials             |
                | - Attestations            |
                | - Portable proofs         |
                +---------------------------+
                          |
                          |
                          v

                  +-----------------------+
                  |   Agents & Wallets    |
                  | (Holders, Issuers,    |
                  |  Verifiers)           |
                  +-----------------------+
                          |
                          |
                          v

                  +-----------------------+
                  |  Applications & Use   |
                  |       Cases           |
                  +-----------------------+

---

- [SSI, KERI & AI](/ssi/keri/ai/)
- [SSI, KERI & UTXO](/ssi/keri/utxo/)
