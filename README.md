# smtp-email-sender
Send emails using SMTP via NodeJS + Nodemailer
##### "Inspired" by https://github.com/schme16/ses-email-sender

## Installation
`npm i -s smtp-email-sender`

## Usage
```javascript

//Initialize the library (only required once)
const email = require('smtp-email-sender')({
  host: "<YOUR_SMTP_HOST>",
  port: "<YOUR_SMTP_PORT>",
  auth: {
    user: "<YOUR_SMTP_USER>",
    pass: "<YOUR_SMTP_PASS>",
    type: "<YOUR_SMTP_AUTHETICATION_MODE>", // PLAIN, LOGIN, MD5 etc...
  },
  secure: "<YOUR_SMTP_SECURE_OPTION>"
})

email({
  from: "john@doe.com",
  to: "jane@doe.com",
  subject: "Date tonight?",
  html: "Hey Honey, Do you ready for date tonight?",
})

```