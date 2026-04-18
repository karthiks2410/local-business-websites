# Local Business Websites

A monorepo for creating professional landing pages for local businesses.

## Structure

```
local-business-websites/
├── sites/                    # Individual client websites
│   └── sweat-and-fit/       # Sweat & Fit Gym - Anekal
├── packages/                 # Shared packages
│   └── ui/                  # Shared UI components (coming soon)
├── package.json             # Root package.json
└── turbo.json              # Turborepo configuration
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build System**: Turborepo
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/karthiks2410/local-business-websites.git
cd local-business-websites

# Install dependencies
npm install
```

### Development

```bash
# Run all sites in development mode
npm run dev

# Run a specific site
npm run dev:sweat-and-fit

# Or directly
cd sites/sweat-and-fit && npm run dev
```

### Build

```bash
# Build all sites
npm run build
```

## Sites

### Sweat & Fit Gym (Anekal, Bangalore)

A premium gym website featuring:
- Multi-page layout (Home, Facilities, Plans, Classes, Gallery, Contact)
- Dark theme with red/gold accents
- Responsive design (mobile-first)
- WhatsApp integration
- Contact form
- Google Maps integration
- Scroll animations

**Live Demo**: Coming soon

## Adding a New Client Site

1. Create a new Next.js app in `sites/`:
   ```bash
   cd sites
   npx create-next-app@latest client-name --typescript --tailwind --app
   ```

2. Install common dependencies:
   ```bash
   cd client-name
   npm install framer-motion lucide-react clsx tailwind-merge
   ```

3. Copy shared components from existing sites or `packages/ui`

4. Customize the design and content

## License

Private - All rights reserved
