# Shadcn UI Components Showcase

A simple Next.js application that displays all Shadcn UI components in a single page for testing in isolation.

## Features

- Displays Shadcn UI components with examples
- Shows different variants and sizes of components
- Provides a clean, organized layout for easy testing

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shadcn-components-showcase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Components Included

- Button (with all variants)
- Card (with header, content, footer)
- More components will be added

## Project Structure

- `src/components/ui/` - Contains all Shadcn UI components
- `src/app/page.tsx` - Main showcase page
- `src/lib/utils.ts` - Utility functions for the components

## Customization

You can customize the components by modifying the Tailwind CSS variables in `src/app/globals.css`.

## License

This project is open source and available under the [MIT License](LICENSE). 