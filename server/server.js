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
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.post("/api/sendemail", async (req, res) => {
  const { email } = req.body;

  try {
    const send_to = email;
    // const send_to = "rockinbg@gmail.com";
    const sent_from = process.env.EMAIL_USER;
    // const sent_from = "rockinbg@outlook.com";
    const reply_to = email;
    // const reply_to = "rockinbg@gmail.com";
    const subject = "thank you message";
    const message = `<h3>Hello Miki,</h3> <p>Thank you very much for your services.</p> <p>Kind regards</p>`;

    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "email sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

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
