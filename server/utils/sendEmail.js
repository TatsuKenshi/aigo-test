const nodemailer = require("nodemailer");

// outlook solution
const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    // host: "smtp-mail.outlook.com",
    port: "587",
    auth: {
      user: process.env.EMAIL_USER,
      //   user: "rockinbg@outlook.com",
      pass: process.env.EMAIL_PASS,
      //   pass: "m!r0Sl4v85!",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
