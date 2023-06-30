export default {
  mail: {
    host: "smtp.googlemail.com",
    port: 465,
    secure: true,
    auth: {
      user: "amitjoshi6180@gmail.com", // amitcentillion@gmail.com
      pass: "zthznllzlwezmjrf", //  vgoqxduaezxragjb
    },
    from: "amitjoshi6180@gmail.com",
    subject: "Sending Email using Node.js",
    text: "send mail using node js!  \u{1F60A}",
  },
  response: {
    MAIL_SEND_SUCCESSFULLY: "Mail send successfully.",
    INTERNAL_ERRRO: "email Id not found in server!",
  },
};
