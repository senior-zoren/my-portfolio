---
title: "DocTrak (Document Routing Engine)"
description: "Centralized document routing engine and API gateway with automated PDF checklist verification, PNPKI cryptographic signing, and multi-system dispatch pipelines."
tags: ["PHP", "Laravel", "MySQL", "JavaScript", "REST API", "Tailwind CSS", "PNPKI"]
publishDate: 2026-10-21
type: "dict"
status: "Staging / Pre-Deployment"
code: "DocTrak"
featured: true
github: "https://github.com/senior-zoren"
---

> **Note**: The codebase for this system is hosted in a private repository due to organizational security policies.

## System Overview

**DocTrak** serves as DICT's central document routing highway and API dispatch gateway. Currently deployed to staging for pre-deployment testing and v1 operational refinements, it acts as an agency-wide integration hub where auxiliary platforms—such as **CHRONO** or centralized Form Libraries—programmatically transmit generated documents into official routing pipelines.

The platform streamlines high-volume paperwork by combining automated PDF compliance checklists, PNPKI cryptographic digital signatures, and human-in-the-loop inter-office routing workflows.

---

## Core Capabilities & Architectural Design

### 1. API-Driven Dispatch Pipeline & Fallback Registry
- **One-Click System Ingestion**: Exposes REST API endpoints allowing satellite applications (e.g., sending a generated DTR directly from **CHRONO**) to push PDF documents directly into DocTrak without manual re-entry.
- **Manual Registration Fallback**: Retains a manual document intake interface to process legacy physical paperwork or external incoming communications.

### 2. Pre-Routing Automated Compliance & Verification
- **System-Level PDF Analysis**: Before a document enters the human review chain, DocTrak executes automated checklist verification against the uploaded PDF structure (confirming mandatory fields, signatures, and required attachments are present).
- **Reviewer Overhead Reduction**: Minimizes administrative bottlenecks by ensuring reviewers and signatories only receive pre-validated, compliant document packages.

### 3. PNPKI Cryptographic Signing & Inter-Office Routing
- **PNPKI `.p12` Certificate Integration**: Allows originators and approving authorities to apply legally binding cryptographic signatures using Philippine National Public Key Infrastructure (`.p12` certificates).
- **Human-Controlled Routing Execution**: Gives users granular control to initiate the routing cycle, dispatching signed documents directly to HR, division heads, or designated signatories with full audit trails.

---

## Technical Challenges & Engineering Breakthroughs

### 1. Reverse-Engineering PNPKI Integration & Certificate Vault Architecture
Integrating the Philippine National Public Key Infrastructure (PNPKI) presented a major technical challenge due to a lack of open-source SDK documentation or disclosed implementation modules from other agency systems (e.g., DSWD Region 8). 

To resolve this, I independently investigated and engineered a dedicated **Certificate Vault Service**:
- **Atomic Registration**: Securely stores and registers encrypted `.p12` certificate files alongside the user's transparent `.png` signature stamp within a single request.
- **Passphrase-Gated Decryption**: Built an automated unlocking mechanism inside the service class that decrypts and validates `.p12` certificates on demand using the user's registered passphrase.
- **OS-Agnostic OpenSSL Helper**: Designed a low-level helper function to locate host system OpenSSL executables across varying OS paths and handle legacy PKCS#12 decoding seamlessly during verification.

### 2. Interactive Drag-and-Drop Stamping vs. Template Lookups
In template-bound government platforms, digital signatures are typically constrained to fixed Key-ID lookups on pre-generated documents. Because **DocTrak** operates strictly as an agnostic routing engine—handling arbitrary external uploads rather than generating native forms—the traditional Key-ID lookup model was insufficient.

- **Unified Interactive Stamping**: Implemented an intuitive drag-and-drop box interface allowing users to visually position their signature stamp, apply their PNPKI certificate, and authenticate external documents in a single request.
- **Immediate Mutated Dispatch**: Mutates, stamps, and cryptographically signs external PDF files on the fly, making downloadable signed files immediately available upon routing cycle completion.