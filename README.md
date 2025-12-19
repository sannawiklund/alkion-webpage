# Website Project – Alkion Tech

This repository contains the source code for the Alkion Tech website.  
The project is delivered as a completed website and is hosted via GitHub Pages with automated deployment.

---

## Live website

https://www.alkiontech.com

---

## Tech stack

- React (Vite)
- Tailwind CSS
- GitHub Pages
- GitHub Actions (CI/CD)
- EmailJS (contact forms)

---

## Contact forms

The website uses **EmailJS** for contact form submissions.
Email delivery is handled via a dedicated Gmail account configured in EmailJS.

⚠️ Changes to EmailJS or Gmail settings may break form functionality.

---

## License

This project is licensed under the **MIT License**.
---

## Project status

This project is delivered **as-is**.
No ongoing maintenance, updates, or technical support are included.
Future changes, fixes, or enhancements are the responsibility of the repository owner or a third-party developer.

---

## Deployment

Deployment is fully automated.

- **Production branch:** `main`
- Any push to `main` triggers a production deployment
- The site is built and deployed via GitHub Actions
- Build output directory: `dist/`

⚠️ Do not deploy manually using `gh-pages` or other scripts.

---

## Branches

- `main` — production branch (live website)
There are no staging or preview branches configured.

---

## Local development

To run the project locally:

```bash
npm install
npm run dev
