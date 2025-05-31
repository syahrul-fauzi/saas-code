[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=coverage)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=bugs)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
![Clones_per_week](https://img.shields.io/badge/Clones_per_week-90-blue)


[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=anoopkarnik_turborepo-saas-boilerplate-code&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=anoopkarnik_turborepo-saas-boilerplate-code)

# COMPLETE SAAS BOILERPLATE CODE

## Overview

MicroSaaS products are one of the most exciting ways to create impactful software with minimal resources. They allow solopreneurs and small teams to quickly launch, validate and iterate on ideas. To help developers hit the ground running, I built a boilerplate for MicroSaaS products using a **TurboRepo monorepo setup** and am excited to share it with the open-source community. For more details, got to these [overview docs](https://docs.saas-code-labs.com/docs/overview) in the documentation.

![Apps](./apps/docs/static/img/design/apps.png)
![Packages](./apps/docs/static/img/design/packages.png)
![UI Packages](./apps/docs/static/img/design/ui.png)

## Workspace Structure

```
/saas-code/
├── apps/                    # Application packages
│   ├── chrome-extensions/   # Chrome extension applications
│   ├── electron-app/        # Electron desktop application
│   ├── hono-api/            # Hono API service
│   ├── nextjs-app/          # Next.js web application
│   └── node-backend/        # Node.js backend service
├── packages/                # Shared packages
│   ├── ai/                  # AI integration utilities
│   ├── analytics/           # Analytics tools
│   ├── auth/                # Authentication utilities
│   ├── connections/         # Connection utilities
│   ├── email/               # Email utilities
│   ├── eslint-config/       # ESLint configuration
│   ├── notion/              # Notion integration
│   ├── payments/            # Payment processing
│   ├── prisma-db/           # Prisma database utilities
│   ├── server-utils/        # Server utilities
│   ├── state-management/    # State management utilities
│   ├── storage/             # Storage utilities
│   ├── ts-types/            # TypeScript type definitions
│   ├── typescript-config/   # TypeScript configuration
│   ├── ui/                  # UI components
│   └── zod-validation/      # Zod validation utilities
├── docker/                  # Docker configuration
├── docs/                    # Documentation
└── scripts/                 # Utility scripts
```

## Available Scripts

### Development

```bash
# Start all development servers
npm run dev:all

# Start specific services
npm run dev:web        # Next.js web app
npm run dev:api        # Hono API
npm run dev:backend    # Node.js backend
npm run dev:electron   # Electron app
```

### Database

```bash
npm run db:migrate     # Run database migrations
npm run db:generate    # Generate Prisma client
npm run db:seed        # Seed database with initial data
npm run db:studio      # Open Prisma Studio
npm run db:reset       # Reset database (caution: deletes data)
```

### Building

```bash
npm run build          # Build all packages
npm run build:web      # Build Next.js web app
npm run build:api      # Build Hono API
npm run build:backend  # Build Node.js backend
npm run build:electron # Build Electron app
```

### Testing & Quality

```bash
npm run test           # Run tests
npm run test:coverage  # Run tests with coverage
npm run lint           # Run linter
npm run format         # Format code
npm run check-types    # Check TypeScript types
```

### Utility

```bash
npm run clean          # Clean build artifacts and node_modules
npm run clean:deps     # Clean node_modules
npm run clean:turbo    # Clean Turbo cache
npm run update:deps    # Update dependencies
```

## Starting Locally

Use the documentation link, to start this boilerplate quickly locally - [development docs](https://docs.saa-code-labs.com/docs/category/getting-started)

## Deploy Your Own

1) You can deploy it to Vercel with one click:

    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsyahrul-fauzi%2Fsaas-code&project-name=nextjs-app&build-command=npm%20run%20db%3Agenerate%20%26%26%20cd%20apps%2Fnextjs-app%20%26%26%20npm%20run%20build&output-directory=apps%2Fnextjs-app%2F.next&install-command=npm%20install&dev-command=cd%20apps%2Fnextjs-app%20%26%26%20npm%20run%20dev
    )

2) Give a repository name which will clone this repo to your account but fail buidling.
3) In the project built in vercel go to Settings and in Environment variables fill all the variables according to these [docs](https://docs.boilerplate.bayesian-labs.com/docs/getting-started/start-locally)

## System Requirements

- Node.js >= 22.9.0
- npm >= 11.1.0

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
