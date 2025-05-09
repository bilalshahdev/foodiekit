export const smtpEmail = process.env.SMTP_EMAIL;
export const smtpPassword = process.env.SMTP_PASSWORD;
export const mailerConfig = {
  host: "dcodax.net",
  port: 465,
  secure: true,
  auth: {
    user: smtpEmail,
    pass: smtpPassword,
  },
};
export const secretApiKey = process.env.SECRET_API_KEY;
