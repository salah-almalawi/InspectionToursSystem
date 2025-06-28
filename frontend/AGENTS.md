# AGENTS Instructions

This file provides an overview of the `server` directory so that tools can understand the back‑end structure without scanning the entire repository.

## Server overview

The `server` folder contains a Node.js Express API. Key components:

- **`app.js`** – Configures Express, security middleware (Helmet, CORS, rate limiting), request logging via Winston, and mounts routers under `/api`.
- **`bin/www`** – Starts the HTTP server using `app.js`. Reads `PORT` from the environment.
- **`config/db.js`** – Connects to MongoDB using `mongoose` and environment variables from `.env`.
- **`controllers/`** – Logic for authentication, managers, and inspection rounds (`authController.js`, `managerController.js`, `inspectionRoundController.js`).
- **`middlewares/`** – Custom middleware:
  - `auth.js` checks JWT tokens using `utils/jwtHelpers.js`.
  - `validate.js` runs `express-validator` checks.
  - `validationRules.js` defines validation rules used by routers.
- **`models/`** – Mongoose schemas (`auth.js`, `manager.js`, `inspectionRound.js`).
- **`routes/`** – Express routers for `/auth`, `/managers`, and `/rounds`.
- **`utils/`** – Helper modules (`jwtHelpers.js`, `logger.js`).
- **`tests/`** – Jest test suite located in `tests/api.test.js` using `supertest` and an in‑memory MongoDB server.
- **`scripts/structure.sh`** – Example script used by the `npm run str` command.

### Running the server

1. From the `server` directory run `npm install` to install dependencies.
2. Copy `.env.example` to `.env` and update variables such as `MONGODB_URI`, `PORT`, `JWT_SECRET`, `CORS_ALLOWED_ORIGINS`, etc.
3. Start the development server with `npm run dev` or use `npm start` to launch normally.

### Testing

Run `npm test` inside `server/` to execute the Jest test suite. This requires the dev dependencies installed.

This summary should allow reasoning about the back‑end without scanning all files. If deeper inspection is required, review the specific modules mentioned above.