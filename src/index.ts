import express from "express";
import nodemailer from "nodemailer";
import { Request, Response } from "express";
import config from "./config";
const app = express();

app.use(
  express.json({
    type: "*/json",
    strict: false,
  })
);
app.get("/sendmail", (req: Request, res: Response) => {
  try {
    const data: any = req.body;
    for (const emelemt of data.email) {
      const transporter = nodemailer.createTransport({
        host: config.mail.host,
        port: config.mail.port,
        secure: config.mail.secure,
        auth: {
          user: config.mail.auth.user, // amitcentillion@gmail.com
          pass: config.mail.auth.pass, //  vgoqxduaezxragjb
        },
      });
      var mailOptions = {
        from: config.mail.from,
        to: emelemt,
        subject: config.mail.subject,
        text: config.mail.text,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.status(500).json({
            message: config.response.INTERNAL_ERRRO,
            data: error,
          });
        } else {
          return res.status(200).json({
            message: config.response.MAIL_SEND_SUCCESSFULLY,
            data: data,
            emailData: info.response,
          });
        }
      });
    }
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(8000, () => {
  console.log("server create successfully");
});
