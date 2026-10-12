import { handle } from 'hono/vercel';
import { app } from '../src/app.js';

// Vercel Function entry point. vercel.json rewrites /api/* to this file.
export default handle(app);
