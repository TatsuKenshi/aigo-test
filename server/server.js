const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get("/api/sendemail", (req, res) => {
  res.send("Home Page");
});
app.post("/api/sendemail", async (req, res) => {
  // const { myName, myEmail, myMessage } = req.body;
  // console.log(req.body);

  try {
    // const send_to = myEmail;
    // const sent_from = process.env.EMAIL_USER;
    // const reply_to = myEmail;
    // const subject = `Aigo Contact Form - message from ${myName}`;
    // const message = `<p>${myMessage}</p> <p>My email is ${myEmail}</p>`;

    // await sendEmail(subject, message, send_to, sent_from, reply_to);
    await sendEmail(req, res);
    // res.status(200).json({ success: true, message: "email sent" });
  } catch (error) {
    // res.status(500).json(error.message);
  }
});

// app.post("/api/sendemail", sendEmail);

const PORT = process.env.PORT || 5000;

// start function
const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
