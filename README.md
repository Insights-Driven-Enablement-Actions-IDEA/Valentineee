# Valentine Website (Next.js)

This project is now converted to Next.js and can be run with npm scripts.

## Tech stack
- Next.js
- React
- Nodemailer (for mail API route)

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env.local
```

3. Update `.env.local` with your SMTP credentials.

4. Start development server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

## Available scripts

```bash
npm run dev
npm run build
npm run start
```

## Notes
- Main UI page: `pages/index.js`
- Mail endpoint (replaces PHP): `pages/api/send-mail.js`
- Global styles: `styles/globals.css`

## License

MIT - see [LICENSE](LICENSE).
