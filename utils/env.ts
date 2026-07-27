export const RESEND_API_KEY = process.env.RESEND_API_KEY;
export const EMAIL_FROM = process.env.EMAIL_FROM;

if(!RESEND_API_KEY || !EMAIL_FROM) {
  throw new Error("RESEND_API_KEY and EMAIL_FROM environment variables are required");
}
