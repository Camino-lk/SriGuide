# Security Policy

## Supported Versions

We actively maintain and address security vulnerabilities in the latest **Production Deployment** of this project.

| Version | Supported          |
| ------- | :------------------: |
| Latest Deployment   | :white_check_mark: |
| Older Deployments   | :x:                |
| Preview Deployments | :x:                |

## Reporting a Vulnerability

If you discover a potential security vulnerability affecting this project, we appreciate your help in reporting it responsibly.
Please **do not** disclose security vulnerabilities through _public GitHub issues, discussions, pull requests, or other public channels_.

Instead, please use **GitHub Private Vulnerability Reporting** to submit your report privately. When submitting a report, please include as much relevant information as possible:

- A description of the vulnerability and its potential impact.
- The affected component or functionality.
- Steps to reproduce the issue, where applicable.
- Proof-of-concept code, screenshots, or other supporting information, if available.
- Any suggested mitigations or potential fixes.

Please avoid including sensitive personal information, real user data, credentials, or other confidential information in your report.

## Scope

This security policy covers security vulnerabilities affecting components operated, maintained, or distributed as part of this project.

The following areas are considered in scope:
- **Website source code**: The publicly available source code, including custom HTML, CSS, JavaScript, Astro components, and configurations.
- **Build and dependency ecosystem**: Security vulnerabilities in project dependencies, build tooling, or configuration that could affect the security of the website.
- **Generated website**: Security issues affecting the deployed static website, including cross-site scripting (XSS), unsafe content rendering, or other client-side vulnerabilities.
- **Form submission and contact functionality**: Security vulnerabilities in the form-processing backend operated and maintained by the project team, including improper input validation, injection vulnerabilities, unauthorized access, and other issues affecting the confidentiality, integrity, or availability of the service.

Although the website is primarily static and built using Astro and Starlight, its associated form-processing backend is also considered part of this security policy.

## Out of Scope

The following are generally outside the scope of this policy:

- Vulnerabilities in third-party services, hosting providers, CDNs, or infrastructure that are not operated or maintained by the project team.
- Security vulnerabilities in upstream frameworks, libraries, or dependencies that do not result from how this project uses or integrates them. Such issues should generally be reported to their respective maintainers.
- Vulnerabilities affecting outdated or unsupported versions of the project.
- Issues requiring physical access to a user's device or account.
- Reports based solely on automated scanner output without a demonstrated security impact.
- General security recommendations, best-practice suggestions, or theoretical vulnerabilities without a demonstrable impact.

Out-of-scope reports may still be reviewed at the maintainers' discretion.

## Responsible Disclosure

We ask security researchers and reporters to:

- Allow the maintainers a reasonable amount of time to investigate and address reported vulnerabilities before public disclosure.
- Avoid publicly disclosing vulnerability details before a fix or mitigation is available.
- Avoid accessing, modifying, or deleting information belonging to other users.
- Avoid actions that could disrupt the availability of the website or associated services.
- Perform security testing only within systems and environments they are authorized to test.

We appreciate responsible security research and cooperation in protecting users of this project.

## Response Process

We aim to handle security reports in a timely and responsible manner.

Our general response process is:
- **Acknowledgment**: We aim to acknowledge receipt of a report within 7 business days.
- **Assessment**: We review the report to determine its validity, severity, affected components, and potential impact.
- **Resolution**: Where appropriate, we work on a fix or mitigation and may communicate with the reporter for additional information.
- **Disclosure**: Once the issue has been addressed, we may publish a security advisory describing the vulnerability and its resolution.

Response and resolution times may vary depending on the severity, complexity, and impact of the reported issue.

We reserve the right to determine the appropriate response and disclosure timeline based on the circumstances of each report.
