---
name: ssi-keri
description: Comprehensive resources for Self-Sovereign Identity (SSI) and Key Event Receipt Infrastructure (KERI) systems. Use when working with identity-first architectures, verifiable credentials, decentralized identifiers (DIDs), KERI implementations, WebAuthn/FIDO2 authentication, trust registries, or building identity verification systems for self-actuating communities. Includes references to selfdriven.network, KERI Foundation standards, Trust Over IP protocols, and related SSI technologies.
license: Reference materials are publicly available
---

# Self-Sovereign Identity (SSI) & KERI Resources

Helping communities self-actuate based on trustable identification and associated identities.

## Overview

This skill provides comprehensive resources for Self-Sovereign Identity (SSI) and Key Event Receipt Infrastructure (KERI) systems. Use this when working with identity-first architectures, verifiable credentials, decentralized identifiers (DIDs), and trustable identification systems for communities.

## When to Use This Skill

Trigger this skill when:
- Working with Self-Sovereign Identity (SSI) implementations
- Building KERI-based identity systems
- Creating verifiable credential solutions
- Implementing DIDs (Decentralized Identifiers)
- Developing trust registries or identity verification systems
- Working with legal entity identifiers (LEI/vLEI)
- Building WebAuthn or FIDO2 authentication systems
- Creating identity-first architectures for communities

## Core Concepts

### Self-Sovereign Identity
SSI enables individuals and organizations to control their own digital identities without relying on centralized authorities. Key principles include:
- User control and consent
- Portability across platforms
- Privacy by design
- Minimal disclosure
- Verifiable credentials

### KERI (Key Event Receipt Infrastructure)
KERI provides a secure, decentralized key management infrastructure for self-certifying identifiers. It ensures cryptographic proof of key state without requiring a blockchain.

## Learning Resources

### Essential Reading
- [Self-Sovereign Identity (SSI) Book](https://www.manning.com/books/self-sovereign-identity) - Comprehensive guide to SSI concepts
- [Learning Digital Identity Book](https://www.oreilly.com/library/view/learning-digital-identity/9781098117689/) - Practical digital identity implementation
- [dSociety Learn SSI](https://dsociety.io/learn-ssi) - Interactive SSI learning platform
- [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) - Web authentication standard

### Identity Systems
- [selfdriven.fyi/identity](https://selfdriven.fyi/identity) - Identity concepts and frameworks
- [selfdriven.fyi/trust](https://selfdriven.fyi/trust) - Trust architecture patterns
- [SSI & KERI Documentation](https://selfdriven.id/ssi/keri/) - Technical implementation guides

### Standards Organizations
- [GLEIF](https://www.gleif.org) - Global Legal Entity Identifier Foundation
- [vLEI](https://vlei.com) - Verifiable Legal Entity Identifier

## Research & Papers

- [Digital Trust Infrastructure Paper](https://cardanofoundation.org/digital-trust-infrastructure-report.pdf) - Cardano Foundation & BRI research
- [Identity Primitives for Human-Rooted Agency in Octomics](https://selfdriven.id/research/id-primitives-for-human-rooted-agency) - Theoretical foundations

## Technology Stack

### Platforms & Interfaces
- [selfdriven.network](https://selfdriven.network) - SSI Interface implementation
- [selfdriven.id/ssi](https://selfdriven.id/ssi) - SSI technical documentation
- [Hyperledger Identus](https://www.lfdecentralizedtrust.org/projects/identus) - Enterprise SSI platform
- [MOSIP](https://www.mosip.io) - Modular Open Source Identity Platform
- [veridian.id](https://www.veridian.id) - Digital identity solutions

### Authentication Standards
- [FIDO2](https://fidoalliance.org/fido2) - Modern authentication standard
- WebAuthn - Web-based authentication protocol

### KERI Implementation
- [KERI Specification](https://github.com/trustoverip/kswg-keri-specification) - Official KERI spec
- [did:webs Specification](https://trustoverip.github.io/tswg-did-method-webs-specification/) - Web-based DID method
- [did:webs Method (GitHub)](https://github.com/WebOfTrust/did-keri) - Implementation repository
- [did:keri](https://identity.foundation/keri/did_methods) - KERI DID methods
- [Signify Browser Extension](https://github.com/WebOfTrust/signify-browser-extension) - KERI browser integration

## Protocols & Standards

### Trust & Registry Protocols
- [Trust Registry Protocol](https://trustoverip.github.io/tswg-trust-registry-protocol/) - Standardized trust registry implementation

## Key Organizations

### Governance & Standards Bodies
- [KERI Foundation](https://keri.foundation/) - KERI governance and standards (selfdriven is a member)
- [Trust Over IP](https://trustoverip.org) - Trust layer standards organization
- [Decentralized Identity Foundation](https://identity.foundation/) - DID standards and specifications

## Related Ecosystems

- [octology.io](https://octology.io) - Related identity ecosystem
- [skillzeb.io](https://skillzeb.io) - Skills verification platform

## Implementation Guidelines

### Best Practices

1. **Start with Standards**: Always reference official specifications (KERI spec, Trust Over IP standards)
2. **Privacy First**: Implement minimal disclosure and privacy-preserving patterns
3. **Cryptographic Verification**: Use KERI for key event logging and verification
4. **Interoperability**: Follow DID standards for cross-platform compatibility
5. **Trust Registries**: Leverage Trust Registry Protocol for verifiable ecosystems

### Common Patterns

**DID Implementation**:
- Use did:keri for KERI-based identifiers
- Use did:webs for web-resolvable DIDs
- Implement proper key rotation using KERI events

**Credential Issuance**:
- Follow verifiable credential data model
- Implement selective disclosure where appropriate
- Use cryptographic proofs for verification

**Authentication**:
- Integrate WebAuthn/FIDO2 for strong authentication
- Use KERI for ongoing key management
- Implement proper session management

### Architecture Considerations

- **Decentralization**: Avoid single points of failure
- **Portability**: Enable identity portability across systems
- **Auditability**: Maintain cryptographically verifiable logs
- **Scalability**: Design for community-scale implementations

## Integration Examples

### With Blockchain
- Cardano integration for anchoring KERI events
- Transaction signing with verified identities
- Smart contract interactions with SSI credentials

### With Web Applications
- Browser extension integration (Signify)
- WebAuthn authentication flows
- Verifiable credential presentation

## Community Resources

For community-driven self-actualization using trustable identification:
- Join [KERI Foundation](https://keri.foundation/) community
- Engage with [Trust Over IP](https://trustoverip.org) working groups
- Contribute to [Decentralized Identity Foundation](https://identity.foundation/) specifications

## Support

For implementation support and community engagement:
- Technical documentation at [selfdriven.id/ssi](https://selfdriven.id/ssi)
- Community interface at [selfdriven.network](https://selfdriven.network)
- Research papers and primitives for human-rooted agency

---

**Mission**: Helping communities self-actuate based on trustable identification and associated identities.