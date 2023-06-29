import express from "express";
import nodemailer from "nodemailer";
const app = express();

const data = [
  {
    email: "joshiamit7383@gmail.com", // username
  },
  {
    email: "amitjoshi6180@gmail.com",
  },
];

const transporter = nodemailer.createTransport({
  host: "smtp.googlemail.com", // Gmail Host
  port: 465, // Port
  secure: true, // this is true as port is 465
  auth: {
    user: "curific.care@gmail.com", // username
    pass: "yjkmaddiomewqfzj", // password
  },
});
for (let i = 0; i < data.length; i++) {
  var mailOptions = {
    from: "curific.care@gmail.com",
    to: data[i].email,
    subject: "Sending Email using Node.js",
    text: "hii this is the testing mode for using node js!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

app.listen(8000, () => {
  console.log("server create successfully");
});
