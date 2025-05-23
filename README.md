# Kaudinya Gotriya - Next.js Project with DevOps Implementation

This project demonstrates a modern web application built with Next.js, incorporating comprehensive DevOps practices including containerization, CI/CD, and cloud deployment.

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
- **Containerization**: Docker
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
- pnpm 8+
- Docker (for containerization)
- Git

### Local Development

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd kaudinya-gotriya
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Run development server:
   ```bash
   pnpm dev
   ```

## DevOps Implementation

### 1. Containerization with Docker

#### Dockerfile Structure

The project uses a multi-stage Docker build process:

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
# ... (dependency installation)

# Stage 2: Builder
FROM node:18-alpine AS builder
# ... (build process)

# Stage 3: Runner
FROM node:18-alpine AS runner
# ... (production setup)
```

#### Building and Running Docker Container

```bash
# Build the image
docker build -t kaudinya-gotriya .

# Run the container
docker run -p 3000:3000 kaudinya-gotriya
```

### 2. CI/CD Pipeline

#### GitHub Actions Workflow

The project implements CI/CD using GitHub Actions with the following stages:

1. **Code Checkout**

   - Triggers on push to main and pull requests
   - Uses actions/checkout@v3

2. **Environment Setup**

   - Node.js setup with caching
   - Dependency installation
   - Sharp installation for image optimization
   - Browserslist database update

3. **Build Process**

   - Environment variable configuration
   - Application build
   - Type checking

4. **Deployment**
   - Vercel deployment using amondnet/vercel-action@v20
   - Environment variable injection
   - Production deployment

#### Workflow Configuration

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
      # ... (workflow steps)
```

## Deployment Process

### 1. Vercel Deployment Setup

1. **Project Configuration**

   - Connect GitHub repository to Vercel
   - Configure build settings
   - Set up environment variables

2. **Required Vercel Secrets**

   - `VERCEL_TOKEN`: API token for deployment
   - `VERCEL_ORG_ID`: Organization identifier
   - `VERCEL_PROJECT_ID`: Project identifier

3. **Environment Variables**
   - Configure in Vercel dashboard
   - Sync with GitHub Actions secrets

### 2. Deployment Steps

1. **Local Testing**

   ```bash
   # Build locally
   pnpm build

   # Test production build
   pnpm start
   ```

2. **Docker Testing**

   ```bash
   # Build and test Docker image
   docker build -t kaudinya-gotriya .
   docker run -p 3000:3000 kaudinya-gotriya
   ```

3. **CI/CD Deployment**
   - Push to main branch triggers deployment
   - GitHub Actions handles the process
   - Vercel deploys the application

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

   - Navigate to repository settings
   - Add secrets under Actions
   - Configure all required environment variables

2. **Vercel Environment Variables**
   - Configure in project settings
   - Match with GitHub secrets

## Monitoring and Maintenance

### 1. Performance Monitoring

- Vercel Analytics
- Lighthouse scores
- Core Web Vitals

### 2. Error Tracking

- Vercel Error Logs
- GitHub Actions logs
- Docker container logs

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
