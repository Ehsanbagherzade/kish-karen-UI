# Project Agent Rules

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript.
- Tailwind CSS v4 for styling; `cn()` from `@/utils/cn` to merge classes; `class-variance-authority` (cva) for component variants.
- TanStack Query for remote data; React Hook Form + Zod for forms; Axios for HTTP.
- Iconify (bundled, via the `Iconify` component) for icons; `sonner` for toasts; `motion` for animation; `js-cookie` for cookies.
- Package manager: `pnpm`. Use `@/*` imports for `src/*` paths.

## Directory Architecture

The project currently has `src/app`, `src/sections`, `src/layouts`, `src/components`, `src/providers`, `src/theme`, and `src/utils`. Shared design primitives live in `src/components/ui`; `/Ehsan` documents their variants and responsive behavior. Create the remaining folders as features need them. **Verify a path or component actually exists before importing it; the example paths below are illustrative, not a guarantee they are present.**

```
src/
  app/         # route entrypoints only (page.tsx, layout.tsx) — keep thin
  sections/    # feature/page composition (see "Sections And Views")
  layouts/     # high-level layout shells: main, dashboard, auth (see "Layouts")
  components/  # reusable UI primitives + shared widgets
    hook-form/ # RHF-integrated form field components (see "Forms")
    iconify/   # shared Iconify icon component + bundled icon set (see "Icons")
  providers/   # app-wide context providers + global state (see "Providers")
  api/         # API contracts per domain (see "API Conventions")
  hooks/       # generic, reusable cross-feature React hooks (see "Hooks")
  utils/       # high-level, app-wide helpers grouped by concern (see "Utilities")
```

**Promotion & boundaries:** keep code at its narrowest scope — section-local by default — and move it up to a shared folder (`src/components`, `src/hooks`, `src/utils`, `src/api`) only when it is genuinely reused across features. Never import one feature section into another; promote the shared piece instead (unless an established local pattern intends the coupling). Section-specific notes below apply this rule per folder.

## Sections And Views

- A `src/sections/<feature>` folder uses this layout:

  ```
  src/sections/<feature>/
    view/         # page-level view(s); public export via view/index.ts   (required)
    components/   # section-specific sub-components
    hooks/        # section-specific hooks; export via hooks/index.ts      (if needed)
    docs/         # feature documentation, e.g. docs/FEED.md              (if needed)
  ```

- Keep `src/app/**/page.tsx` thin: parse route/search params, render the matching section view, no large UI.
- Each major route has a `view/<feature>-view.tsx` that owns page layout, data-loading composition, and orchestration. Export views from `view/index.ts` and import from that barrel.
- Section-local code stays in the section: sub-components in `components/`, hooks in `hooks/`, and non-component code (helpers, constants, schemas, context) at the section root (e.g. `helpers.tsx`, `context/`).
- For nested experiences, mirror the URL hierarchy (e.g. `sections/article/details/view`, `sections/projects/details/project-wallet/view`); nested sub-features repeat the same `view/`, `components/`, `hooks/`, `docs/` layout as they grow.

## Layouts

- `src/layouts` holds **high-level, app-wide layout shells** that provide shared page chrome (header, sidebar, nav, footer) — e.g. `main`, `dashboard`, `auth`.
- Each layout takes `children` and renders the structural shell around them. When a layout grows, group it with its own parts in a folder, mirroring the section layout:

  ```
  src/layouts/<name>/
    <name>-layout.tsx   # the shell (e.g. dashboard-layout.tsx)
    components/          # layout-specific parts (header, sidebar, nav, footer)
    index.ts            # public barrel
  ```

- Keep `src/app/**/layout.tsx` thin: render the matching layout from `src/layouts`, the same way `page.tsx` renders a section view (see "Sections And Views"). Do not build layout chrome directly in route files.
- Layouts compose shared `src/components/*`; layout-specific parts stay in the layout's `components/` and are promoted to `src/components` only when reused across layouts.

## Providers

- `src/providers` holds app-wide React context providers and the global state they expose — e.g. auth/session, theme, the React Query client, and the `Toaster`.
- One provider per file (e.g. `auth-provider.tsx`, `react-query-provider.tsx`), each a client component that owns its context, the provider component, and a `useXxx` hook to consume it.
- Compose them once at the app root (`src/app/layout.tsx`), ideally behind a single `AppProviders` wrapper, so route entrypoints stay thin.
- Keep feature-specific state in its section; promote to `src/providers` only when the state is genuinely app-wide.

## Icons

- Use Iconify for all icons through the shared `Iconify` component in `src/components/iconify` — never import `Icon` from `@iconify/react` directly in feature code.
- Icons are **bundled and registered offline** from a local set, not fetched from the Iconify API at runtime. This makes the icon name a typed union (`IconifyName`), so the `icon` prop is autocompleted and type-checked.
- Folder structure:

  ```
  src/components/iconify/
    icon-sets.ts       # bundled icon data — { "prefix:name": { body } }; the source of available icons
    register-icons.ts  # builds collections from icon-sets, derives the IconifyName type, exposes registerIcons()
    iconify.tsx        # the Iconify component (default export)
    index.ts           # public barrel — default export + IconifyProps / IconifyName types
  ```

- `iconify.tsx`: default-export `Iconify` with `IconifyProps = IconProps & { icon: IconifyName }`. It calls `registerIcons()`, renders `@iconify/react`'s `Icon` with `ssr`, applies base classes `inline-flex shrink-0`, and merges `className` via `cn()` from `@/utils/cn`.
- `register-icons.ts`: registers the bundled sets once (idempotent guard, with per-prefix sizing), and exports the `IconifyName` type derived from the `icon-sets.ts` keys.
- **Adding an icon:** add its `"prefix:name": { body: "<svg…>" }` entry to `icon-sets.ts` — that automatically extends `IconifyName`. Use it as `<Iconify icon="solar:user-bold-duotone" />`.

## Forms

- Forms use React Hook Form with a Zod resolver for validation. Build them from the integrated components in `src/components/hook-form` — never hand-write `FormProvider`, `<form>`, or `Controller` boilerplate in feature code.
- Folder structure:

  ```
  src/components/hook-form/
    form.tsx        # the Form wrapper (FormProvider + native <form>)
    rhf-input.tsx   # one RHF wrapper per base UI primitive (rhf-select.tsx, …)
    index.ts        # public barrel
  ```

- `form.tsx`: the `Form` wrapper takes `methods` (the `useForm` return), `onSubmit`, and `children`, and renders a `FormProvider` around a native `<form>` wired to `methods.handleSubmit(onSubmit)`. Wrap every form in it.
- RHF field wrappers: each base UI primitive gets a matching wrapper (e.g. `Input` → `RHFInput`, `Select` → `RHFSelect`) that:
  - takes a required `name` prop and binds the field through RHF's `Controller` (reading `control` from `useFormContext`, supplied by the `Form` wrapper above),
  - forwards the remaining primitive props through, and renders validation errors from `fieldState`.
- When a field type has no wrapper yet, add it under `src/components/hook-form` following this pattern rather than wiring `Controller` ad hoc.

## Implementation Preferences

- Prefer existing local components over raw primitives (`Button`, `Dialog`, `Select`, `Checkbox`, `Textarea`, `Input`, `DropdownMenu`, `Tooltip`, `hook-form` wrappers) **once they exist** — check `src/components` first rather than assuming.
- Build component variants with `cva`; merge class names with `cn()`. Never hand-concatenate Tailwind class strings.
- Name files in kebab-case (`feed-post-menu.tsx`, `use-debounce.ts`, `dashboard-layout.tsx`); name React components and providers in PascalCase.
- Forms: see "Forms". Remote data/mutations: TanStack Query with stable keys from `src/api/<domain>/query-keys.ts`.
- Surface mutation results and recoverable errors with `sonner` toasts.
- Imports are auto-sorted by `simple-import-sort` (lint error if unsorted) — let the formatter handle ordering.
- Match nearby structure and styling before adding abstractions. Keep edits scoped; do not refactor unrelated modules.
- Add `"use client"` only when hooks, browser APIs, or client-only libraries are used.

## API Conventions

Every `src/api/<domain>` folder has the same files, and `index.ts` re-exports the public surface of all of them:

```
src/api/<domain>/
  types.ts         # request/response types (server + client shapes)
  transformers.ts  # server → client shape conversion
  query-keys.ts    # React Query key factory
  <domain>.ts      # endpoint functions (named after the domain, e.g. user.ts, posts.ts)
  index.ts         # public barrel — re-exports the above
```

### `types.ts`

- The backend speaks **snake_case**; the app speaks **camelCase**. Model both.
- For each entity define a **server type** prefixed `Server` (the raw wire shape, snake_case fields) and a **client type** with the bare name (camelCase) — e.g. `ServerUser` and `User`.
- snake_case appears **only** in `Server*` types. Every type consumed by components/hooks is camelCase.

### `transformers.ts`

- For each entity export a `transform<Entity>` function mapping the server type to the client type — e.g. `transformUser(data: ServerUser): User`. This is the single place snake_case → camelCase conversion happens.
- For list responses, map the array through the item transformer (e.g. `data.map(transformUser)`).

### `query-keys.ts`

- Export one frozen factory per domain named `<domain>QueryKeys`, with `as const` tuples so keys stay stable and well-typed. Derive narrower keys from `all` so invalidating `all` clears the whole domain:

  ```ts
  export const userQueryKeys = Object.freeze({
    all: ["user"] as const,
    currentUser: () => [...userQueryKeys.all, "current"] as const,
  });
  ```

### `<domain>.ts` (endpoint functions)

- Write the calls with Axios and **return client types**: transform every response through the matching transformer before returning (e.g. `transformUser(response.data)`).
- The Axios base URL already includes the client API prefix — endpoint paths are relative to it.
- Endpoint functions return data only; do not call React Query here. Compose them with `useQuery`/`useMutation` in hooks/views using the keys from `query-keys.ts`.
- Request payloads take client (camelCase) types in the signature and are serialized to the server (snake_case) shape before sending.

### `index.ts`

- Re-export everything (types, transformers, query keys, endpoint functions) so consumers import from `@/api/<domain>`.

## Hooks

- `src/hooks` holds **generic, reusable React hooks** that are not tied to any one feature — e.g. `use-boolean.ts`, `use-debounce.ts`, `use-local-storage.ts`, `use-media-query.ts`, `use-copy-to-clipboard.ts`.
- One hook per file, kebab-cased and named after the hook it exports: `use-debounce.ts` exports `useDebounce`. Import each hook directly from its file (`@/hooks/use-debounce`).
- Feature-specific hooks do **not** live here — they go in `src/sections/<feature>/hooks` (see "Sections And Views"). Promote a hook to `src/hooks` only when it is generic and used across features.
- Hooks that wrap remote data (TanStack Query around an `src/api/<domain>` function) belong with their feature's section hooks unless the data is genuinely cross-feature, and always source query keys from `src/api/<domain>/query-keys.ts`.

## Utilities

- `src/utils` holds only **high-level, app-wide helpers**, grouped by concern with one file per concern — e.g. `cn.ts` (class names), `date.ts`, `axios.ts`, `storage.ts`, `routes.ts`. Keep each file focused on a single domain of helpers.
- Do not put feature-specific or one-off logic here. Section-local helpers stay at the section root (see "Sections And Views"); promote to `src/utils` only when a helper is generic and reused across features.

### `routes.ts`

- Single source of truth for route-path construction. Never hardcode a path string in components, links, or navigation calls — import a builder from here.
- Each route is a `get<Name>Route` function returning the path string, optionally taking params:

  ```ts
  export const getSignInRoute = () => "/sign-in";
  export const getSingleFeedRoute = (feedId: number) => `/feed/${feedId}`;
  ```

- Use these everywhere a path is needed — `<Link href>`, anchor `href`, `router.push`, redirects, etc. — so route shapes live in one place.

## Verification

Run for touched files when possible:

- Lint: `pnpm exec eslint <files>` (also enforces import sort).
- Format: `pnpm exec prettier --check <files>` (or `pnpm format` to fix). Tailwind classes are auto-sorted by `prettier-plugin-tailwindcss`.
- Types: `pnpm exec tsc --noEmit` when build is blocked or when touching types.
- Build: `pnpm build` when feasible. If it fails because `next/font` cannot fetch Google Fonts, report that as an environment/network blocker and still run lint + `tsc --noEmit`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
