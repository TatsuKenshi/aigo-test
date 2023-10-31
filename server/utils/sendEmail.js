const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

// // // outlook solution
// const sendEmailOutlook = async (
//   subject,
//   message,
//   send_to,
//   sent_from,
//   reply_to
// ) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: "587",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const options = {
//     from: sent_from,
//     to: send_to,
//     replyTo: reply_to,
//     subject: subject,
//     html: message,
//   };

// // // send email
//   transporter.sendMail(options, function (err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(req.body);

  const msg = {
    to: "rockinbg@gmail.com", // Change to your recipient
    from: "rockinbg@gmail.com", // Change to your verified sender
    subject: `Aigo Contact Form - ${req.body.myName}`,
    text: `${req.body.myMessage}`,
    html: `<p>${req.body.myMessage}</p><p>Please reply to ${req.body.myEmail}</p>   <p>Kind regards</p>`,
  };

  // const info = await sgMail.send(msg);
  // res.json(info);

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmail;
