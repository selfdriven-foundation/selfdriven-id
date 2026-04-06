---
layout: selfdriven
title: SSI, KERI, SPIFFE & SPIRE | selfdrivenID
permalink: /ssi/keri/spiffe/
---

# How SPIFFE/SPIRE Works with KERI

## What Each System Does

**SPIFFE/SPIRE** solves the *workload identity problem*:
- How does a container or microservice prove what it is to another service?
- Issues short-lived X.509 SVIDs to running workloads
- Identity is *infrastructure-attested* — "this pod is running in namespace X with label Y"
- Depends on a trusted SPIRE Server + PKI hierarchy
- Identity is ephemeral and tied to the running instance

**KERI** solves the *portable cryptographic identity problem*:
- How does an entity (person, organisation, service) prove who it is, independent of any infrastructure?
- Identity is self-certifying — rooted in key pairs, not infrastructure trust
- Identity persists across infrastructure changes, cloud providers, and time
- The Key Event Log (KEL) is the authoritative, portable record of identity

## The Fundamental Difference

| | SPIFFE/SPIRE | KERI |
|---|---|---|
| Root of trust | SPIRE Server (infrastructure) | Key pair (cryptographic) |
| Identity lifetime | As long as workload runs | Persistent, survives infrastructure |
| Identity moves with | The infrastructure | The controller of the keys |
| Revocation | Certificate expiry | Key rotation event in KEL |
| Designed for | Service mesh, microservices | Entities, organisations, humans |
| Portability | Tied to one SPIRE deployment | Vendor/cloud agnostic |

## Where They Can Work Together

There are three realistic integration points:

### 1. KERI as the Root of Trust for SPIRE

The standard SPIRE deployment has a SPIRE Server acting as the CA — you're trusting the infrastructure operator. In a KERI integration, you replace or augment this with a KERI-rooted trust anchor:

```
KERI AID (organisation's root identity)
  └── ACDC credential: "this SPIRE Server is authorised to issue SVIDs"
        └── SPIRE Server issues SVIDs to workloads
              └── Workloads use SVIDs for mTLS
```

This means the organisation's cryptographic identity (their KERI AID) is the root of trust, not just the cloud infrastructure. If you move cloud providers, the KERI root persists.

### 2. SVID + KERI Credential Binding

A workload receives a SPIFFE SVID from SPIRE for mTLS inside the service mesh. Separately, for operations that need richer identity assurance, the workload presents a KERI-anchored ACDC credential that attests what the workload is authorised to do:

```
Connection established: mTLS with SVID
  (proves: I am payments-service in prod namespace)

Operation authorised: ACDC credential presented
  (proves: payments-service holds a credential from
   organisation AID authorising it to call settlement-api)
```

SPIFFE handles the *transport security* layer. KERI handles the *authorisation* layer. They don't overlap — they stack.

### 3. KERI Delegated AIDs for Long-Lived Service Identity

SPIFFE SVIDs are deliberately short-lived (hours). This is great for security but means there's no persistent, portable identity for a service across deployments.

KERI delegation (`dip` events) can provide this:

```
Organisation AID (root)
  └── dip → Service AID: "payments-service"
        └── This AID is stable across deployments
        └── SPIRE issues short-lived SVIDs under this AID's authority
        └── The KEL records the full history of the service's identity
```

The KERI AID for the service persists. SPIFFE SVIDs are the short-lived operational credentials that hang off it.

## The Philosophical Tension

SPIFFE/SPIRE assumes you trust the infrastructure to attest workload identity — it asks "is this really running where Kubernetes says it is?" and trusts the answer.

KERI is explicitly designed to *not* trust infrastructure — the whole point is that identity is self-certifying and doesn't depend on any server or platform being honest.

So in a pure KERI world, you'd be sceptical of any system that says "trust me, this workload is what it claims to be, because the orchestrator told me so."

The practical resolution: use SPIFFE/SPIRE for the *operational* layer (fast, automatic, ephemeral cert issuance for mTLS inside the mesh) and KERI for the *governance* layer (persistent organisational identity, authorisation credentials, and audit trail that survives infrastructure changes).

## In the Context of Your Security Stages

Mapping this to the IP Allowlisting page structure:

| Stage | Mechanism | What it proves |
|---|---|---|
| 1 | IP Allowlisting | You're in the right network location |
| 2 | mTLS + X.509 | You have a valid certificate from a trusted CA |
| 3a | SPIFFE/SPIRE | You are this specific workload in this specific infrastructure |
| 3b | KERI/ACDC | You are this organisation/entity with this persistent authorisation |
| **3 combined** | **SPIRE + KERI** | **Workload identity (operational) + Entity identity (governance)** |

The combination covers the full stack — from the network packet up to the organisational governance level.

## Summary

SPIFFE/SPIRE and KERI are not competitors — they operate at different layers and solve different problems. SPIRE gives running software an automated, ephemeral operational identity inside an infrastructure boundary. KERI gives entities a persistent, portable, cryptographic identity that survives any infrastructure boundary. Together they form a complete identity stack: SPIRE handles the *what is running right now*, KERI handles the *who ultimately controls and owns it*.

