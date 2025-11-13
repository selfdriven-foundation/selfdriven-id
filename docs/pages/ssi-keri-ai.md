---
layout: default
title: SSI, KERI & AI | selfdrivenID
permalink: /ssi/keri/ai/
---

# How KERI Helps Interface GenAI (via SKILL.md) Into Organisations

KERI provides the **trust and identity layer**, while SKILL.md provides the **capability and control layer**.  
Together they let organisations deploy GenAI with verifiable identity, authority, governance, and revocation.

## 1. KERI Gives Each AI Agent a Verifiable Identity (AID)

Each AI agent (or model, workflow, or assistant) gets its own **Autonomous Identifier**:

- `aid:org:hr-ai`
- `aid:org:finance-ai`
- `aid:org:onboarding-ai`
- `aid:org:customer-support-ai`

These AIDs are:
- self-certifying  
- portable  
- revocable  
- key-rotatable  
- delegable from a parent organisational AID  

This lets the organisation treat AI agents as **first-class actors** with traceable, secure identities.

## 2. KERI Handles Delegation, Roles, and Key Rotation

SKILL.md describes *what* the AI can do.  
KERI enforces *who* is allowed to authorise it.

Examples:

- HR-AI is **delegated** from the HR department AID.
- Finance-AI must rotate signing keys every 90 days.
- Ops-AI is restricted to approved tools.
- If a model is compromised → rotate keys → trust intact.

KERI becomes the **identity governance spine**.

## 3. ACDCs Authenticate AI Outputs

Every GenAI output can be wrapped in an **ACDC** credential:

- reports  
- recommendations  
- summaries  
- compliance checks  
- code snippets  
- internal memos  
- onboarding documents  

An ACDC gives:
- authenticity: which AI generated it  
- integrity: content bound to hash  
- traceability: tied to KERI key state  
- non-repudiation: verifiable provenance  

This converts AI output into **verifiable organisational artifacts**.

## 4. SKILL.md Becomes the AI’s Verifiable Capability Contract

SKILL.md defines:

- allowed tools  
- operational boundaries  
- escalation rules  
- examples  
- required credentials  
- safety constraints  

Combined with KERI:

- SKILL.md files are **signed** by the organisation’s AID.  
- Updates to SKILL.md are tracked as **KERI events**.  
- Departments can issue/approve skill changes.  
- Each AI runs with a **verifiably endorsed capability set**.

This provides capability-based control with cryptographic accountability.

## 5. Organisations Become Identity Graphs of Humans + AIs

A KERI-backed organisation can structure AI actors like this:

Each AI agent is:
- authenticated  
- delegated  
- governed  
- revocable  
- auditable  

This eliminates “anonymous” or “unbounded” AI behaviour.

## 6. Benefits

### **Trust**
Every AI action has a verifiable cryptographic trail.

### **Governance**
SKILL.md lists capabilities; KERI enforces identity and authority.

### **Safety**
Compromise recovery is instant via key rotation.

### **Compliance**
AI outputs become ACDCs — verifiable, timestamped, auditable.

### **Interoperability**
Multiple AI vendors can participate in the same trust fabric.

### **Scalability**
You can safely grow from 1 to 100+ AI agents.


## Summary

**KERI gives GenAI a secure identity + governance layer.  
SKILL.md gives GenAI a transparent capability + safety layer.**

Together they enable:

- verifiable AI identities  
- delegated authority models  
- governed and signed SKILL manifests  
- key rotation and revocation  
- authenticated AI outputs (ACDC)  
- accountable AI operations inside organisations  

**A trusted, governed, and auditable AI workforce for the organisation.**