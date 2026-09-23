# SAAZ — launch page

React + Vite, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

- `src/data.js` — product names, colourways, charm layouts, step copy, image paths
- `src/components/Sections.jsx` — every page section
- `src/components/ScarfArt.jsx` — illustrated scarf + charm renders used until product photos exist
- `src/styles.css` — palette and typography tokens at the top
- Email signup: `onSubmit` in `Signup` (Sections.jsx) — swap the placeholder for Mailchimp, Klaviyo, ConvertKit, etc.
