# Repository guidance

## Commands

- Use `pnpm` for dependency and script commands; the repository uses `pnpm-lock.yaml` and `pnpm-workspace.yaml`.
- Keep the root `packages: ['.']` entry in `pnpm-workspace.yaml`; Vercel's pnpm install rejects the workspace when the packages field is absent.
- Start the development server with `pnpm dev` (equivalent to the CRA `pnpm start` command).
- Run the available style check with `pnpm exec standard src`.
- There are currently no test files. Use `pnpm test -- --watchAll=false --passWithNoTests` when a passing no-tests check is needed; omit `--passWithNoTests` when checking whether tests exist.
- Run browser smoke tests with `pnpm test:e2e`; use `pnpm test:e2e:headed` for a visible Chromium session. Playwright starts the CRA dev server automatically through `playwright.config.js`.
- `pnpm run build` is the production verification command; the CRA Jest ESLint preset was removed because it caused an `Environment key "jest/globals" is unknown` failure.

## Structure

- This is a single Create React App package; the browser entrypoint is `src/index.js`, and `src/App.js` owns the React Router route table and shared navbar/footer.
- Page components live in `src/pages`, reusable UI in `src/components`, page CSS in `src/styles`, and static portfolio data in `src/helpers`.
- Project cards and project detail routes both depend on the positional entries in `src/helpers/ProjectList.js`; keep list indexes aligned when changing project data because details use `/project/:id` to index that array.
- Imported images belong in `src/assets`; public/static files belong in `public` and are referenced through CRA's `%PUBLIC_URL%` convention when needed.
