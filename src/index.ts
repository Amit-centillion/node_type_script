import express from "express";
import nodemailer from "nodemailer";
import { Request, Response } from "express";
const app = express();

app.use(
  express.json({
    type: "*/json",
    strict: false,
  })
);
app.get("/sendmail", (req: Request, res: Response) => {
  const data = req.body;
  console.log("data", data);
  if (data.email !== "") {
    const transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "amitjoshi6180@gmail.com", // gmail ID : amitcentillion@gmail.com
        pass: "zthznllzlwezmjrf", // password : vgoqxduaezxragjb
      },
    });
    var mailOptions = {
      from: "amitjoshi6180@gmail.com",
      to: data.email,
      subject: "Sending Email using Node.js",
      text: "hii this is the testing mode for using node js!",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error", error);
        return res.status(500).json({
          message: "email Id not found in server!",
          data: error,
        });
      } else {
        return res.status(200).json({
          message: "mail send successfully.",
          data: data,
          emailData: info.response,
        });
      }
    });
  } else {
    return res.status(400).json({
      messga: "Email is required",
    });
  }
});

app.listen(8000, () => {
  console.log("server create successfully");
});
