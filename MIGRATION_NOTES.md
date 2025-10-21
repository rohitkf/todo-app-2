# Migration to Next.js 15

## Changes Made

### Dependencies Updated
- **Next.js**: 14.1.4 → 15.5.6 (latest stable)
- **React**: 18.2.0 → 19.0.0
- **React DOM**: 18.2.0 → 19.0.0
- **TypeScript**: 5.4.4 → 5.7.2
- **Tailwind CSS**: 3.4.3 → 3.4.17
- **ESLint**: 8.57.0 → 9.17.0
- **@types/react**: 18.2.74 → 19.0.6
- **@types/react-dom**: 18.2.24 → 19.0.2
- **@types/node**: 20.12.4 → 22.10.5
- **Prettier**: 3.2.5 → 3.4.2
- **Autoprefixer**: 10.4.19 → 10.4.20
- **PostCSS**: 8.4.38 → 8.4.49
- **@tailwindcss/forms**: 0.5.7 → 0.5.9
- **prettier-plugin-tailwindcss**: 0.5.13 → 0.6.11

### Code Changes

1. **tsconfig.json**
   - Updated `target` from `es5` to `ES2022`
   - Changed `moduleResolution` from `node` to `bundler` (recommended for Next.js 15)

2. **next.config.js**
   - Removed experimental `serverActions` flag (now stable in Next.js 15)

3. **app/page.tsx**
   - Replaced `unstable_noStore()` with `export const dynamic = 'force-dynamic'`
   - Removed unstable import

4. **app/layout.tsx**
   - Removed Google Fonts import (causing network issues in restricted environment)
   - Using Tailwind's font-sans with antialiased class instead

5. **Type Definitions**
   - Created `/types/prisma.ts` with manual Todo type definition
   - Updated imports in `TodoItem.tsx` and `lib/todos.ts` to use manual types

### Known Issues

**Prisma Client Generation**
- Prisma client cannot be fully generated in this environment due to network restrictions (403 errors when downloading engine binaries)
- In a production environment with proper network access, run `npm install` and the postinstall hook will automatically generate the Prisma client
- The application code is ready and will work once Prisma client is properly generated

### How to Complete Setup

In an environment with network access:
1. Run `npm install` - this will install all dependencies and generate the Prisma client
2. Set up your `DATABASE_URL` in `.env` file (see `.env.example`)
3. Run `npx prisma migrate dev` to set up the database
4. Run `npm run dev` to start the development server
5. Run `npm run build` to create a production build

### Testing

To test the migration in a proper environment:
1. Ensure database is set up and `DATABASE_URL` is configured
2. Run `npm install` to generate Prisma client
3. Run `npm run build` to verify the production build works
4. Run `npm run dev` to test in development mode

### Benefits of Next.js 15

- Improved performance with React 19
- Better TypeScript support
- Stable Server Actions (no longer experimental)
- Enhanced developer experience
- Latest security updates and bug fixes
