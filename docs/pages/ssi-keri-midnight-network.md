---
layout: default
title: SSI, KERI & Midnight Network | selfdrivenID
permalink: /ssi/keri/midnight-network/
---

# KERI & Midnight — Conceptual Comparison

## Summary
KERI solves **programmatic identity and trust**.  
Midnight solves **privacy-preserving computation and settlement**.  
They are complementary, not competitive.

## Core Intent

| System | Primary Goal |
|--------|--------------|
| **KERI** | Establish and prove *entity continuity and authority* without exposing identity data. |
| **Midnight** | Execute *private business logic* and verify *zero-knowledge proofs* on a blockchain network. |

## What Each Actually Proves

| Question | KERI | Midnight |
|----------|------|----------|
| “Is this the same entity across time?” | ✅ via Key Event Log (KEL) | ❌ not its purpose |
| “Is this entity authorised to take action?” | ✅ via ACDC + trust registries | ⚠️ only if a proof is provided |
| “Can we minimise disclosure?” | ✅ rationale + selective fields | ✅ zero-knowledge proofs |
| “Can a smart contract enforce the rules?” | ➖ external to protocol | ✅ native to protocol |

## Privacy Philosophy

| Area | KERI | Midnight |
|------|------|----------|
| What becomes public | Key events (no PII) | Proof hashes + on-chain public elements |
| What stays private | PII, credential details, correlators | Raw values and internal data |
| Anti-correlation | Strong by design | Depends on circuit design |
| Privacy model | **Minimum rationale** | **Minimum disclosure** |


## Placement in the Transaction Lifecycle

| Stage | Best Fit |
|-------|----------|
| Identify entity | **KERI** |
| Prove authority / membership | **KERI + ACDC** |
| Validate access / rights | **KERI + trust registries** |
| Execute logic privately | **Midnight** |
| Publish result / settlement | **Cardano** |

## Developer Experience

| Dimension | KERI | Midnight |
|-----------|------|----------|
| Deployment model | Offline / federated / distributed | Confidential smart-contract L2 |
| Required cryptography | Standard signatures | zk-SNARK / private proof systems |
| Integration cost | Low (JSON/HTTP, libs) | Higher (circuits, proof tooling) |
| Time-to-value | Fast for real-world identity | Longer, for privacy computation |

## Practical Interpretation
- **KERI handles who is acting and why they are authorised.**
- **Midnight handles whether the private business logic is correctly executed.**

Identity and trust come first → **KERI**  
Private permissioned execution comes later → **Midnight**

## Analogy
> **KERI = passport + licence validation**  
> Proves an entity and its authority without revealing personal details.

> **Midnight = confidential courtroom**  
> Executes the rules privately based on zero-knowledge proofs.

## Summary
> **KERI provides practical, programmatic identity and trust for today.  
> Midnight provides private logic execution when identity meets sensitive transactions.**