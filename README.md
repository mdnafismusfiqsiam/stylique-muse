# Stylique Muse — Website starter

A responsive, lightweight static storefront/brand website for Stylique Muse, built with HTML, CSS and vanilla JavaScript. It can be hosted on GitHub Pages. The contact form is prepared for an n8n webhook, but **email and WhatsApp automation are not live until you configure the external accounts and credentials**.

## Files

- `index.html` — homepage, collections, brand story, FAQ and contact form
- `styles.css` — responsive styles
- `script.js` — mobile navigation and contact form submission
- `automation/n8n-contact-workflow.json` — workflow template to import and configure in n8n
- `automation/SETUP.md` — detailed email and WhatsApp setup

## 1. Preview locally

Open `index.html` in a browser. For best results, use VS Code with Live Server. The contact form will not send anything until `WEBHOOK_URL` in `script.js` is replaced with your active n8n production webhook URL.

## 2. Publish with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new **public** repository named `stylique-muse-website` (or another name you prefer).
3. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `automation` folder to the repository root. Do not upload API tokens or passwords.
4. Open repository **Settings → Pages**.
5. Under build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. The URL will look like `https://YOUR-USERNAME.github.io/stylique-muse-website/`.
7. Test on mobile and desktop. If using a custom domain, configure it in Pages and add the DNS records required by GitHub.

## 3. Email automation prerequisites

- A Resend account and a verified sending domain are recommended for production.
- An always-on n8n instance with HTTPS is required for a reliable live webhook. Local n8n is suitable for testing only while your computer is running.
- Import `automation/n8n-contact-workflow.json` into n8n, then follow `automation/SETUP.md` to add credentials, set environment variables and configure nodes.
- The workflow is a template: inspect and test it with your own credentials before activation.
- For best deliverability, verify a domain you own and configure the SPF/DKIM DNS records shown by your email provider. Do not use a visitor's email address as the sender; it is the recipient only.

## 4. WhatsApp automation prerequisites

Use the official WhatsApp Cloud API. You will need a Meta developer app, a WhatsApp Business account/phone number, a valid access token and phone-number ID. For an automated first message, use an approved WhatsApp message template when required by Meta's current policy. The person should explicitly consent to WhatsApp replies; the optional checkbox on the form captures this preference. A phone number alone does not prove the person has WhatsApp or guarantees delivery.

## 5. Before launch checklist

- [ ] Replace the n8n webhook placeholder in `script.js`.
- [ ] Configure the n8n production URL, HTTPS and allowed CORS origin for your GitHub Pages website.
- [ ] Add server-side validation, rate limiting and spam protection (e.g. a honeypot and/or CAPTCHA) before public launch.
- [ ] Add Resend credentials to n8n credentials or secure environment variables, never to frontend files.
- [ ] Add Meta/WhatsApp credentials to n8n securely, never to frontend files.
- [ ] Confirm the message template, consent handling and Meta policy requirements.
- [ ] Test invalid inputs, email delivery, WhatsApp consent off/on, API failures and duplicate submissions.
- [ ] Replace remote stock photography with your own licensed product photos for the final store.
- [ ] Add real product details, prices, shipping/returns policy and social profile links before taking orders.

## Important limitations

This is a ready-to-customize starter site, not a live ecommerce checkout. It does not process payments or store orders. The stock photos are remote demo images and should be replaced with brand-owned or properly licensed images. The automation workflow cannot be activated until you configure your own accounts, credentials, template and hosting.
