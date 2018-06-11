const email = require("./index.js")({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  securee: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    type: process.env.SMTP_AUTH,
  },
});

email({
  from: "john@doe.com",
  to: "jane@doe.com",
  subject: "Date tonight?",
  html: "Hey Honey, Do you ready for date tonight?",
});
