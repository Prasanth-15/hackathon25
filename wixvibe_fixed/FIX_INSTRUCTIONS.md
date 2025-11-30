Fixes applied:
- Recreated a valid package.json with dependencies and devDependencies required by the project.
- Rewrote tsconfig.json to target ES2020, include lib entries, set path aliases, and exclude eslint-rules.
- Added lint script.

What you must do locally:
1. From project root run:
   rm -rf node_modules package-lock.json     (or delete via Explorer on Windows)
2. Run:
   npm install
3. Start dev server:
   npm run dev

Notes:
- I cannot run `npm install` in this environment. You must run it locally to download node_modules.
- If any package versions conflict, run `npm install` and paste the terminal errors here; I will adjust versions.
