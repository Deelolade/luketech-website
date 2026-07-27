export const RESEND_API_KEY = process.env.RESEND_API_KEY;
export const EMAIL_FROM = process.env.EMAIL_FROM;
export const OWNER_EMAIL = process.env.OWNER_EMAIL;

if(!RESEND_API_KEY || !EMAIL_FROM || !OWNER_EMAIL) {
  throw new Error("RESEND_API_KEY, EMAIL_FROM, and OWNER_EMAIL environment variables are required");
}
