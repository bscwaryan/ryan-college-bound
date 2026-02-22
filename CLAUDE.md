# CLAUDE.md — Ryan College Bound

---

## SECURITY RULES — MANDATORY

### 1. NEVER HARDCODE SECRETS
No API keys, passwords, tokens, or connection strings in source code. Always use environment variables via `process.env.VARIABLE_NAME`. If a value is sensitive, it goes in `.env` and nowhere else.

### 2. VALIDATE ALL INPUT AT THE BOUNDARY
Any user-facing forms or API routes must validate input before processing.

### 3. NEVER LEAK ERROR DETAILS TO CLIENTS
Never return `error.message`, `error.stack`, or internal error details in API responses. Log the full error server-side, return a generic message to the client.

### 4. NO DEBUG LOGGING IN PRODUCTION
Do not log sensitive data without gating behind `NODE_ENV === 'development'`.

### 5. RUN `npm audit` BEFORE PUSHING
After adding or updating any dependency, run `npm audit`. If vulnerabilities are introduced, resolve them before pushing.

### 6. SECRETS AND DATA FILES STAY OUT OF GIT
`.env` files, files containing passwords/tokens/PII, and private keys must **never** be committed. Verify `.gitignore` coverage before committing.
