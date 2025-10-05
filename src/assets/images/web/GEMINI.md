# GEMINI.md

## Project Overview

This is a 3D model viewer web application built with React, TypeScript, and Three.js. It allows users to upload and inspect `.obj` 3D models with various rendering options and controls.

The project uses Vite for building, Zustand for state management, and shadcn/ui for UI components.

## Building and Running

### Prerequisites

- Node.js and npm should be installed.

### Development

To run the development server:

```bash
npm run dev
```

### Build

To build the project for production:

```bash
npm run build
```

### Lint

To lint the project files:

```bash
npm run lint
```

### Preview

To preview the production build:

```bash
npm run preview
```

## Development Conventions

### State Management

The application uses Zustand for centralized state management. The store is defined in `src/store/viewerStore.ts` and contains the entire application state, including the loaded model, viewer settings, light settings, and UI status.

### Component-Based Architecture

The application follows a component-based architecture with a clear separation of concerns between UI, state management, and 3D rendering logic.

### Styling

The project uses Tailwind CSS for styling, with UI components from shadcn/ui.

### Path Aliases

The project uses a path alias `@` for the `src` directory, configured in `vite.config.ts` and `tsconfig.json`.
