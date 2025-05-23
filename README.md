# Kaudinya Gotriya - Next.js Project with DevOps Implementation

This project demonstrates a modern web application built with Next.js, with a strong focus on DevOps practices such as automated CI/CD, secure environment management, and cloud deployment using Vercel.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Development Setup](#development-setup)
3. [DevOps Implementation](#devops-implementation)
4. [Deployment Process](#deployment-process)
5. [Environment Configuration](#environment-configuration)
6. [Monitoring and Maintenance](#monitoring-and-maintenance)

## Project Overview

### Tech Stack

- **Frontend & Backend**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

### Key Features

- Internationalization support
- Server-side rendering
- API routes
- Image optimization
- Responsive design

## Development Setup

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)
- Git

### Local Development

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd kaudinya-gotriya
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Run development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## DevOps Implementation

### 1. Automated CI/CD with GitHub Actions

#### Workflow Overview

- **Trigger:** On push to `main` or pull requests
- **Steps:**
  1. Checkout code
  2. Set up Node.js and cache dependencies
  3. Install dependencies
  4. Install and configure build tools (e.g., sharp for image optimization)
  5. Build and type-check the application
  6. Deploy to Vercel using secure tokens and environment variables

#### Example Workflow

```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Install sharp
        run: npm install sharp
      - name: Update browserslist database
        run: npx browserslist@latest --update-db
      - name: Build application
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
          MONGODB_URI: ${{ secrets.MONGODB_URI }}
          CLOUDINARY_CLOUD_NAME: ${{ secrets.CLOUDINARY_CLOUD_NAME }}
          CLOUDINARY_API_KEY: ${{ secrets.CLOUDINARY_API_KEY }}
          CLOUDINARY_API_SECRET: ${{ secrets.CLOUDINARY_API_SECRET }}
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: "--prod"
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
          MONGODB_URI: ${{ secrets.MONGODB_URI }}
          CLOUDINARY_CLOUD_NAME: ${{ secrets.CLOUDINARY_CLOUD_NAME }}
          CLOUDINARY_API_KEY: ${{ secrets.CLOUDINARY_API_KEY }}
          CLOUDINARY_API_SECRET: ${{ secrets.CLOUDINARY_API_SECRET }}
```

### 2. Secure Environment Management

- **Secrets in GitHub:** All sensitive values (API keys, DB URIs, etc.) are stored as GitHub repository secrets and injected at build and deploy time.
- **Vercel Environment Variables:** For runtime configuration, environment variables are also set in the Vercel dashboard for production and preview deployments.
- **No secrets are ever committed to the repository.**

### 3. Automated Build & Type Checking

- The workflow runs `npm run build` which triggers Next.js static analysis, type checking, and production build.
- Any build or type errors will fail the pipeline, ensuring only healthy code is deployed.

### 4. Automated Deployment to Vercel

- Uses the [amondnet/vercel-action](https://github.com/amondnet/vercel-action) to deploy the built app to Vercel.
- Deployments are atomic and preview URLs are generated for pull requests.
- All environment variables are securely passed to Vercel at deploy time.

## Deployment Process

### 1. Vercel Deployment Setup

1. **Connect GitHub repository to Vercel**
2. **Configure build settings** (defaults work for Next.js)
3. **Set up environment variables** in the Vercel dashboard for production and preview
4. **Add Vercel secrets to GitHub** for CI/CD deployments:
   - `VERCEL_TOKEN`: API token for deployment
   - `VERCEL_ORG_ID`: Organization identifier
   - `VERCEL_PROJECT_ID`: Project identifier

### 2. Deployment Steps

- **Push to main branch** triggers the GitHub Actions workflow
- **Workflow builds and tests the app**
- **On success, workflow deploys to Vercel**
- **Vercel provides preview and production URLs**

## Environment Configuration

### Required Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_URL=

# Database
MONGODB_URI=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Vercel
VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
```

### Setting Up Secrets

1. **GitHub Secrets**

   - Go to repository settings → Secrets and variables → Actions
   - Add all required environment variables and Vercel secrets

2. **Vercel Environment Variables**
   - Go to project settings in Vercel
   - Add all runtime environment variables for production and preview

## Monitoring and Maintenance

### 1. Performance Monitoring

- Vercel Analytics
- Lighthouse scores
- Core Web Vitals

### 2. Error Tracking

- Vercel Error Logs
- GitHub Actions logs

### 3. Maintenance Tasks

- Regular dependency updates
- Security patches
- Performance optimization
- Database maintenance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

[Your License]

---

This documentation is part of a larger DevOps portfolio project. For more details about the implementation and architecture decisions, visit the [Documentation Project](link-to-documentation-project).
