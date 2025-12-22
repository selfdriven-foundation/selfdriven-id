---
layout: default
title: Identity primitives for human-rooted agency in Octomics | selfdriven ID
permalink: /research/id-primitives-for-human-rooted-agency
---

# Identity Primitives for Human-Rooted Agency in Octomics

**selfoid → octoid**  

octomics treats identity as *generated structure*, not a static label.

This paper defines two primitives:

- **selfoid**: the human-rooted identity primitive (the “I” that holds intent and accountability).
- **octoid**: a derived, contextual identity representation generated from the selfoid to operate in specific domains, roles, sessions, and flows inside **[octomics.io](https://octomics.io)**.

The core claim is simple:

> A human does not “have” one identity.  
> A human **generates** many identity representations, each bounded by purpose and proof.

*selfoid* is the source. *octoids* are the instruments.

## 1. Why this matters
In an AI-saturated environment, “identity” is no longer just about authentication. It’s about:

- **agency** (who intended this),
- **accountability** (who can be held responsible),
- **scope** (what this identity is allowed to do),
- **privacy** (what it must *not* reveal),
- **verifiability** (what can be proven deterministically).

If we keep using a single identifier everywhere, we get:
- correlation,
- surveillance surfaces,
- role confusion,
- permission sprawl,
- and unverifiable claims.

Octomics flips it:
- keep the human anchor stable (selfoid),
- generate bounded representations (octoids),
- connect them with proofs rather than assumptions.

## 2. Definitions

### 2.1 Selfoid (human-rooted identity primitive)
A **selfoid** is the base identity object for a human.

Properties:
- **Non-transferable by design** (it represents the human, not a device)
- **Intent-bearing** (it’s where “I authorize” originates)
- **Accountability-bearing** (it’s where responsibility terminates)
- **Generative** (it can derive identities without leaking itself)

Think: the selfoid is the “root of agency”.

It may be implemented as:
- a DID root (e.g., `did:key`, `did:web`, `did:peer`, `did:cardano`),
- plus governance rules and recovery,
- plus long-lived key material and/or threshold custody,
- plus an explicit *self-binding* story (how this DID is tied to a human).

### 2.2 Octoid (contextual identity representation)
An **octoid** is a derived identity representation generated from the selfoid, intended for a specific operational context inside octomics.io.

Properties:
- **Scoped** (purpose-bound)
- **Rotatable** (short-lived if needed)
- **Non-correlatable by default** (separation between contexts)
- **Capability-carrying** (it has explicit permissions)
- **Proof-linked** to the selfoid (derivation is verifiable without revealing more than required)

Think: *octoids* are “working identities”.

## 3. The generative model: Selfoid produces Octoids
Octomics treats identity like a tree:

- The selfoid is the **root**
- Octoids are **branches**
- Proofs are **connective tissue**

### 3.1 Generative rule
A selfoid generates octoids using:
- context (what is this for?)
- constraints (what is allowed?)
- privacy requirements (what must be hidden?)
- governance requirements (what must be accountable?)

The output is:
- one octoid per operational scope,
- plus a proof relationship that can be selectively disclosed.

### 3.2 Why “generation” matters
Generation is stronger than “linking accounts” because:
- it enforces domain separation from the start,
- it makes scope explicit,
- it enables revocation and expiry at the representation level,
- it reduces the blast radius of compromise.

## 4. Octoid taxonomy (practical types)
Octoids can be categorized by *what they represent*.

### 4.1 Role Octoid
Represents a role the human can perform.
- “Builder”
- “Auditor”
- “Contributor”
- “Caretaker”
- “Claims reviewer”

Used when the system needs role-based capability with bounded scope.

### 4.2 Session Octoid
Represents a single interaction session.
- short-lived
- minimal capability
- ideal for AI-assisted flows

Used to limit replay, correlation, and long-term tracking.

### 4.3 Domain Octoid
Represents the human inside a specific domain:
- health
- education
- insurance
- governance
- payments

Used to separate identity across ecosystems and reduce cross-domain leakage.

### 4.4 Delegation Octoid
Represents delegation to an agent/tool.
- “AI assistant for claims”
- “Automation for data extraction”
- “Verifier service”
- “Batch signer under policy”

Used to control agentic actions without giving away the selfoid.

### 4.5 Artifact Octoid
Represents authorship/ownership of an artifact:
- document
- dataset
- model output
- proposal
- credential issuance record

Used to prove provenance without forcing global identity disclosure.

## 5. The proof relationship: how Octoids stay human-rooted
The key design is **selective linkability**:

- By default, octoids are **not** linkable to each other.
- When needed, an octoid can present a **proof of derivation** (or membership) anchored in the selfoid.

This gives a spectrum:

- **anonymous** (no linkage)
- **pseudonymous** (stable within a context)
- **selectively linkable** (prove continuity when required)
- **accountable** (escalate to selfoid-level accountability when policy demands)

*octomics* uses proofs to move along this spectrum intentionally.

## 6. Governance: accountability without surveillance
The selfoid carries human accountability, but octoids prevent casual correlation.

### 6.1 Normal operation
- octoids do the work
- only minimal proofs are shared
- privacy is preserved by default

### 6.2 Escalation (dispute, fraud, safety, compliance)
- policies define when escalation is allowed
- escalation reveals **only what is necessary**
- “prove you are authorized” beats “show me who you are”

This is how Octomics avoids two failure modes:
- **total anonymity** (no accountability)
- **total transparency** (surveillance)

## 7. Octomics lifecycle: create → use → rotate → revoke
Octoids are treated as lifecycle-managed identity units.

### 7.1 Create
- from selfoid
- with explicit purpose + constraints
- registered in the Octomics identity graph (local or anchored)

### 7.2 Use
- to sign actions, attest statements, request capabilities
- with minimal disclosure proofs

### 7.3 Rotate
- rotate keys/identifiers frequently for high-risk contexts
- preserve continuity via proofs, not static identifiers

### 7.4 Revoke
- revoke per octoid (fine-grained)
- revoke delegations quickly
- preserve the selfoid even when a branch is compromised

This gives resilience:
- compromise of an octoid ≠ compromise of the human root.

## 8. Mapping to Octomics primitives
Octomics can model activity and trust as composable events.

A typical flow:
1. Selfoid defines intent and authority boundaries.
2. Octoid executes a scoped action (e.g., “submit claim evidence”, “issue credential”, “vote”).
3. Octomics records the event with:
   - octoid signature
   - context metadata
   - proof policy references
4. Trust and reputation attach to octoids (contextual trust),
   while accountability remains anchored to the selfoid (human trust).

Result:
- reputation becomes **domain-specific**
- identity remains **human-rooted**
- proofs replace hand-wavy “identity assertions”

---

## 9. Design principles (the “why it works” list)

### Principle 1: Human-rooted agency is non-negotiable
A system can automate decisions, but accountability must still bottom out in a human (selfoid).

### Principle 2: Representations should be purpose-bound
If an identity can do “anything”, it becomes a liability. Octoids enforce purpose boundaries.

### Principle 3: Linkability must be a choice, not a default
Privacy isn’t a feature; it’s the default topology.

### Principle 4: Capabilities should be explicit and auditable
Octoids carry explicit capability grants, not implied permissions.

### Principle 5: Recovery is identity design, not customer support
Selfoid recovery rules define human continuity across time.

---

## 10. Example scenario

A human participates in three contexts:
- Community governance voting
- Insurance claim submission (with an AI assistant)
- Publishing a research artifact

### Without Selfoid→Octoid
One identifier is reused everywhere → correlation and over-permission.

### With Selfoid→Octoid
- Governance Octoid signs votes, reveals only eligibility proof.
- Claims Delegation Octoid authorizes an AI tool to extract documents, but cannot submit payments.
- Artifact Octoid signs the publication provenance; later, a proof links it to the selfoid only if required.

The human stays the source of truth.
The system stays privacy-preserving.
Each context stays bounded.

## 11. Summary
- **selfoid** is the human-rooted identity primitive that holds intent and accountability.
- **octoids** are derived identity representations that operate in bounded contexts inside octomics.io.
- The relationship is maintained through **selective proofs**, not global identifiers.
- This enables: privacy by default, accountability by policy, and scalable orchestration in an AI era.

---

## Definitions

**selfoid**
- stable DID + recovery policy
- root keys (threshold preferred)
- authority graph / governance rules

**octoid**
- derived identifier or DID
- scoped capability set
- expiry + rotation policy
- revocation handle
- proof method: derivation / membership / authorization (selective disclosure)

**Events**
- signed by *octoid*
- anchored to context
- verifiable policies define when/how escalation links to selfoid
