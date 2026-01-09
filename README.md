# Northline Property Solutions LLC — Static Website

A clean, fast **static** website you can upload to GitHub and deploy on Vercel/Netlify.

## Quick start
1. Upload the folder contents to a GitHub repo
2. Deploy (Vercel: New Project → Import Repo)
3. Edit placeholders (phone/email) in the HTML files

## Connect the form to your CRM (Zapier/Make/GHL)
Open `index.html` and find:

```html
<form id="leadForm" data-endpoint="">
```

Paste your webhook URL into `data-endpoint`, for example:

```html
<form id="leadForm" data-endpoint="https://hooks.zapier.com/hooks/catch/XXXX/YYYY/">
```

Form submissions will POST JSON to that endpoint.

## Placeholders to change
- Phone display: 1 (928) 551-4898
- Phone tel: +19285514898
- Email: northlinepropertysolutions@gmail.com
