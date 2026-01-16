# Session Management Platform

A Next.js application that allows users to view previous and upcoming sessions and register through a form. Built with modern React practices and a focus on user experience.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Data Fetching:** React Query (TanStack Query), Axios, Fetch API
- **Language:** TypeScript/JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env` or `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL="https://hub.trianglemena.xyz/api"
```

**Note:** The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser. All API requests are made to this base URL.

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Start

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Features

- ✅ View previous sessions
- ✅ View upcoming sessions
- ✅ User registration form with validation
- ✅ Responsive design with Tailwind CSS
