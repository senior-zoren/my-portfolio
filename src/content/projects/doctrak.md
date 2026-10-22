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