# Stolos — authentication exercise

Starter for the front-end exercise. The back end is ready: you build the screens from the Figma file on top of it.

Stack: Next.js (App Router), Better Auth, Prisma + PostgreSQL, Tailwind. `react-hook-form` and `@tanstack/react-query` are installed.

## Setup

Requires [Bun](https://bun.sh) and Docker.

```bash
bun install
cp .env.example .env
bun run db:setup   # starts Postgres on port 5433, applies migrations, creates the test accounts
bun run dev
```

`bun run db:seed` puts the test accounts back in their initial state at any time.

## What is provided

| File | Role |
|---|---|
| `src/lib/auth.ts` | Better Auth server configuration |
| `src/lib/auth-client.ts` | Better Auth client (`authClient`), with the two-factor plugin |
| `src/app/api/auth/[...all]/route.ts` | All auth endpoints, under `/api/auth` |
| `src/app/[locale]/code/page.tsx` | The code helper page (see below) |
| `src/app/globals.css` | Stolos design tokens (colors, text sizes, spacing, radii) and the `glassmorphism` utility |
| `src/components/ui/` | `Button`, `Input`, `PasswordInput`, copied from the Stolos web app |
| `src/components/sectors/` | Company sectors from the Stolos web app: list, colours and icons (`sectors.ts`) and the `SectorTag` component. Sector names are not translated: that is part of the exercise. The rest of the company card is yours to build. |
| `src/components/company/company-status.ts` | Company statuses from the Stolos web app (`CompanyStatus`) |
| `src/app/[locale]/page.tsx` | Start page: preview of these building blocks, to replace with your screens |
| `intlayer.config.ts` | Intlayer configuration for English and French |

The tokens redefine part of Tailwind's scale: `text-xs` … `text-xl` follow the Stolos sizes, and the spacing names (`xs`, `s`, `sm`, `m`, `l`, `xl`, `2xl`, `3xl`, `4xl`) also apply to sizing utilities, so `max-w-xl` is 1.5rem. Use explicit values such as `max-w-[36rem]` for widths.

No real email is sent and no authenticator app is needed. Open **`/en/code`** or **`/fr/code`** in another tab: for every account it shows the current authenticator code, the last code "sent by email", the recovery codes and the last password-reset link.

English and French content is declared in `*.content.ts` files next to the pages that use it. Intlayer generates its dictionaries when the application builds.

## Routes

| Path | What it is |
|---|---|
| `/en`, `/fr` | Start page in English or French: preview of the provided building blocks. |
| `/en/code`, `/fr/code` | Helper page: codes, recovery codes and reset links of every account (see above). |
| `/api/auth/*` | Auth endpoints served by Better Auth, listed below. |

No other page exists yet: sign-in, sign-up, verification and password-reset pages are yours to create, at the paths you choose.

| Method | Path | Action |
|---|---|---|
| POST | `/api/auth/sign-up/email` | Sign up |
| POST | `/api/auth/sign-in/email` | Sign in |
| POST | `/api/auth/two-factor/verify-totp` | Verify app code |
| POST | `/api/auth/two-factor/send-otp` | Send email code |
| POST | `/api/auth/two-factor/verify-otp` | Verify email code |
| POST | `/api/auth/two-factor/verify-backup-code` | Verify recovery code |
| POST | `/api/auth/request-password-reset` | Ask for a reset link |
| GET | `/api/auth/reset-password/:token` | The reset link itself: redirects to `redirectTo?token=…` |
| POST | `/api/auth/reset-password` | Set the new password |
| GET | `/api/auth/get-session` | Current session |
| POST | `/api/auth/sign-out` | Sign out |

## Test accounts

Password for all of them: `Stolos-Test-2026`

| Email | Second step at sign-in |
|---|---|
| `none@example.com` | none |
| `app@example.com` | authenticator app |
| `both@example.com` | authenticator app or email code |
| `email@example.com` | email code |

Every account with a second step also has recovery codes.

## Auth API

Use `authClient`; each method maps to an endpoint under `/api/auth`.

| Action | Client call | Notes |
|---|---|---|
| Sign up | `authClient.signUp.email({ name, email, password })` | Signs the user in. Password: 8 characters minimum. |
| Sign in | `authClient.signIn.email({ email, password })` | With a second step, returns `{ twoFactorRedirect: true, twoFactorMethods }` instead of a session. `twoFactorMethods` contains `"totp"` (app) and/or `"otp"` (email). |
| Verify app code | `authClient.twoFactor.verifyTotp({ code })` | |
| Send email code | `authClient.twoFactor.sendOtp()` | A new code cancels the previous one. Codes expire after 3 minutes. |
| Verify email code | `authClient.twoFactor.verifyOtp({ code })` | |
| Verify recovery code | `authClient.twoFactor.verifyBackupCode({ code })` | Each code works once. |
| Ask for a reset link | `authClient.requestPasswordReset({ email, redirectTo: "/your-page" })` | Same answer whether the account exists or not. A new link cancels the previous one. |
| Set the new password | `authClient.resetPassword({ newPassword, token })` | The link on `/code` redirects to `redirectTo?token=…`. |
| Current session | `authClient.useSession()` / `authClient.getSession()` | |
| Sign out | `authClient.signOut()` | |

### Errors to handle

Errors come back as `{ error: { status, code, message } }`.

| Case | Status | `code` |
|---|---|---|
| Wrong email or password | 401 | `INVALID_EMAIL_OR_PASSWORD` |
| Email already used at sign-up | 422 | `USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL` |
| Wrong or expired code | 401 | `INVALID_CODE` |
| Sign-in attempt expired (10 minutes) | 401 | `INVALID_TWO_FACTOR_COOKIE` |
| Reset link invalid, expired or already used | 400 | `INVALID_TOKEN` |
| Too many requests | 429 | — the `X-Retry-After` response header gives the seconds to wait |

The server refuses a new email code or a new reset link for **30 seconds** after the previous request (429). Sign-in is limited to 3 attempts per 10 seconds.
