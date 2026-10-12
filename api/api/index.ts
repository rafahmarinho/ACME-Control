import { handle } from 'hono/vercel';
import { app } from '../src/app.js';

// Vercel Function entry point. vercel.json rewrites /api/* to this file.
// Named HTTP-method exports tell the Vercel Node.js runtime to use the
// Web-standard (Request -> Response) signature that Hono produces.
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
export const HEAD = handler;

export default handler;
