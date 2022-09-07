module.exports = (app) => {
  const router = require("express").Router();
  const nodemailer = require("nodemailer");

  router.post("/send_mail", async (req, res) => {
    const writer_name = req.body.writer_name;
    let writer_email = req.body.writer_email;
    const receiver_name = req.body.receiver_name;
    let receiver_email = req.body.receiver_email;
    const subject = req.body.subject;
    const content = req.body.content;
  });
};
