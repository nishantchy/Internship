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

### DevOps Work Done in This Project

- **CI/CD Pipeline Setup:**

  - Designed and implemented a GitHub Actions workflow for automated build and deployment.
  - Ensured the workflow installs dependencies, builds the app, and deploys to Vercel on every push to `main`.

- **Environment Management:**

  - Managed sensitive environment variables using GitHub Secrets for CI/CD and Vercel dashboard for runtime.
  - Ensured no secrets are committed to the repository.

- **Vercel Deployment:**

  - Automated deployment to Vercel using the [amondnet/vercel-action](https://github.com/amondnet/vercel-action) GitHub Action.
  - Configured Vercel project and environment variables for production and preview deployments.

- **Secret Management:**

  - Coordinated secret storage between GitHub Actions and Vercel to ensure secure and seamless deployments.

- **Build Troubleshooting:**

  - Diagnosed and resolved build issues related to package managers, lockfiles, and native dependencies (e.g., sharp).
  - Fixed stack overflow errors by adjusting dependency installation and configuration.

- **Documentation:**
  - Wrote and maintained clear documentation for DevOps processes, environment setup, and deployment steps.

### CI/CD Workflow Example

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
      - name: Build application
        run: npm run build
        env:
          # All required environment variables from GitHub Secrets
          AUTH_KEY_SECRET: ${{ secrets.AUTH_KEY_SECRET }}
          CLOUDFLARE_URL: ${{ secrets.CLOUDFLARE_URL }}
          JWT_SECRETE: ${{ secrets.JWT_SECRETE }}
          MONGO: ${{ secrets.MONGO }}
          NEXT_PUBLIC_CLOUDINARY_API_KEY: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_API_KEY }}
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }}
          NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL }}
          CLOUDINARY_API_SECRET: ${{ secrets.CLOUDINARY_API_SECRET }}
          SMTP_USER: ${{ secrets.SMTP_USER }}
          SMTP_PASS: ${{ secrets.SMTP_PASS }}
          NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_SERVICE_ID }}
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: "--prod"
        env:
          # All required environment variables from GitHub Secrets
          AUTH_KEY_SECRET: ${{ secrets.AUTH_KEY_SECRET }}
          CLOUDFLARE_URL: ${{ secrets.CLOUDFLARE_URL }}
          JWT_SECRETE: ${{ secrets.JWT_SECRETE }}
          MONGO: ${{ secrets.MONGO }}
          NEXT_PUBLIC_CLOUDINARY_API_KEY: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_API_KEY }}
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }}
          NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL }}
          CLOUDINARY_API_SECRET: ${{ secrets.CLOUDINARY_API_SECRET }}
          SMTP_USER: ${{ secrets.SMTP_USER }}
          SMTP_PASS: ${{ secrets.SMTP_PASS }}
          NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_SERVICE_ID }}
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
```

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
AUTH_KEY_SECRET=
CLOUDFLARE_URL=
JWT_SECRETE=
MONGO=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL=
CLOUDINARY_API_SECRET=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
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

[nishantchy]

---

This documentation is part of a larger DevOps portfolio project. For more details about the implementation and architecture decisions, visit the [Documentation Project](chaudharynishant.com.np).

admin_usr: nishant18
admin_pw: nishant
