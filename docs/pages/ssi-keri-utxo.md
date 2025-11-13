---
layout: default
title: SSI, KERI & UTXO | selfdrivenID
permalink: /ssi/keri/utxo/
---

## Conceptual Relationship Between a KERI Chain and a UTXO Chain

A **KERI chain** and a **UTXO chain** share the same *conceptual values*, even though they apply them to different domains (identity vs value).

### 1. Both use **minimal, append-only facts**
- **UTXO:** each output is a tiny immutable fact about value.  
- **KERI:** each event is a tiny immutable fact about identity.

Both avoid bloated, mutable global state.

### 2. Both favour **locality over global state**
- **UTXO:** no “balance”; just local spends.  
- **KERI:** no central registry; just local event logs.

Truth emerges from small, linked pieces, not from a central database.

### 3. Both rely on **cryptographic continuity**, not institutions
- **UTXO:** continuity via input → output hash chain.  
- **KERI:** continuity via event digests and key rotations.

The hash chain *is* the authority.

### 4. Both treat time as **order**, not timestamps
- **UTXO:** consensus ordering defines time.  
- **KERI:** event sequence numbers and digests define time.

Time is relational, not wall-clock.

### 5. Both protect users through **isolation and composability**
- **UTXO:** each coin is isolated.  
- **KERI:** each identifier is autonomous.

Identity objects and value objects both have their own self-contained histories.

### 6. Both avoid **global coupling**
- **UTXO:** no shared account state.  
- **KERI:** no shared identity registry.

This makes both portable, offline-verifiable, and resistant to systemic failure.

### 7. Both build trust through **witnessing**
- **UTXO:** consensus witnesses the spend.  
- **KERI:** witnesses sign receipts for events.

Trust is accumulated, not granted.

### 8. Both prefer **integrity over convenience**
They prioritise:
- verifiable history  
- deterministic replay  
- cryptographic guarantees  
- user sovereignty  

Even if it costs a bit more friction.

### 9. Both produce a **replayable story**
- **UTXO:** replay all spends → get ledger state.  
- **KERI:** replay all events → get identity state.

State = minimal facts + deterministic logic.

### 10. Both treat **keys as the root of authority**
Ownership = whoever can sign the next valid step.

### **Summary**
**KERI and UTXO chains share the same philosophy:  
a world built from small, verifiable, append-only facts that create trustworthy state through cryptographic continuity rather than central authority.**