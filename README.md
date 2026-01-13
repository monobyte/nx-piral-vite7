# Nx Piral Monorepo with Vite 7

A production-ready, Nx Package-Based Monorepo using Piral framework for micro-frontends, TypeScript, and Vite 7 for bundling.

## Folder Structure

```
nx-piral-vite7/
├── apps/
│   ├── shell/                    # Piral App Shell (Mantine UI v7)
│   │   ├── src/
│   │   │   ├── components/       # Shell components
│   │   │   │   ├── Layout.tsx
│   │   │   │   └── Layout.module.css
│   │   │   ├── pages/            # Shell pages
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Dashboard.module.css
│   │   │   │   ├── ErrorPage.tsx
│   │   │   │   └── ErrorPage.module.css
│   │   │   ├── styles/
│   │   │   │   └── global.module.css
│   │   │   ├── feed.ts           # Pilet feed configuration
│   │   │   ├── index.tsx         # App entry point
│   │   │   └── piral.d.ts        # Type declarations
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   ├── mfe1/                     # Pilet 1 (Mantine Controls)
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── MantineControlsPage.tsx
│   │   │   │   └── MantineControlsPage.module.css
│   │   │   └── index.tsx
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   └── mfe2/                     # Pilet 2 (AG-Grid)
│       ├── src/
│       │   ├── pages/
│       │   │   ├── AgGridPage.tsx
│       │   │   └── AgGridPage.module.css
│       │   └── index.tsx
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
│
├── packages/
│   ├── utils/                    # Shared utility functions
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   └── grid/                     # AG-Grid wrapper package
│       ├── src/
│       │   ├── index.ts
│       │   └── styles.css
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
│
├── types/
│   └── css-modules.d.ts          # CSS Modules type declarations
│
├── package.json                  # Root package.json
├── nx.json                       # Nx configuration
├── tsconfig.base.json            # Base TypeScript config
├── .gitignore
├── .npmrc
└── README.md
```

## Features

- **Nx Package-Based Monorepo**: Each project has its own package.json
- **Piral Framework**: Micro-frontend architecture with shell and pilets
- **Vite 7 Bundler**: Fast development and production builds via `piral-cli-vite7`
- **Mantine UI v7**: Modern React component library
- **AG-Grid**: Enterprise-grade data grid
- **CSS Modules**: Scoped styling across all apps and packages
- **Import Maps**: Shared dependencies between shell and pilets
- **TypeScript**: Full type safety throughout

## Shared Dependencies (Import Maps)

The shell shares the following dependencies with pilets via importmaps:

- `react`
- `react-dom`
- `react-router-dom`
- `@mantine/core`
- `@mantine/hooks`
- `@proj/grid`

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Install all dependencies
npm install
```

### Development

```bash
# Run all services concurrently (shell + pilets)
npm run dev

# Or run individually:
npm run serve:shell    # Shell at http://localhost:1234
npm run serve:mfe1     # MFE1 at http://localhost:1235
npm run serve:mfe2     # MFE2 at http://localhost:1236
```

### Build

```bash
# Build all projects
npm run build

# Build specific project
npm run build:shell
npm run build:mfe1
npm run build:mfe2
```

### Nx Commands

```bash
# Build shell with dependencies
nx build shell

# Serve shell with dependent pilets built
nx serve shell

# Build all projects
nx run-many -t build

# Visualize dependency graph
nx graph
```

## Project Details

### Shell (apps/shell)

The Piral app shell provides:
- Layout with navigation (Mantine AppShell)
- Dashboard page
- Error handling
- Pilet loading via local feed (development) or remote feed (production)

### MFE1 (apps/mfe1)

Demonstrates Mantine UI controls:
- TextInput, Select, Switch, Slider
- Checkbox, Button
- Form state management
- CSS Modules styling

### MFE2 (apps/mfe2)

Demonstrates AG-Grid features:
- Data display with hardcoded employee data
- Sorting, filtering, pagination
- Row selection
- CSV export
- Custom cell renderers

### Utils Package (packages/utils)

Shared utility functions:
- `formatMessage()` - Text formatting
- `capitalize()` - String capitalization
- `generateId()` - Unique ID generation
- `debounce()` / `throttle()` - Function helpers
- `formatDate()` / `formatCurrency()` - Formatting helpers

### Grid Package (packages/grid)

AG-Grid wrapper with:
- Pre-configured `DataGrid` component
- Theme support (light/dark)
- Custom styling
- Re-exported types

## CSS Modules

All styling uses CSS Modules with the naming convention `[name].module.css`:

```tsx
import styles from './Component.module.css';

export const Component = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hello</h1>
  </div>
);
```

## Configuration

### Vite Config (CSS Modules)

```ts
css: {
  modules: {
    localsConvention: 'camelCaseOnly',
    scopeBehaviour: 'local',
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  },
}
```

### Import Maps (package.json)

```json
{
  "importmap": {
    "imports": {
      "react": "",
      "react-dom": "",
      "@mantine/core": "",
      "@proj/grid": ""
    },
    "inherit": ["piral-base"]
  }
}
```

## Production Deployment

1. Build all projects: `npm run build`
2. Deploy the shell (`apps/shell/dist/release`)
3. Publish pilets to a pilet feed service
4. Update `apps/shell/src/feed.ts` to fetch from production feed

## License

MIT
