module.exports = (app) => {
  const router = require("express").Router();
  const nodemailer = require("nodemailer");

  router.post("/send_mail", async (req, res) => {
    /** 1) 프론트엔드에서 전달한 사용자 입력값 */
    const writer_name = req.body.writer_name;
    let writer_email = req.body.writer_email;
    const receiver_name = req.body.receiver_name;
    let receiver_email = req.body.receiver_email;
    const subject = `${req.body.writer_name} / ${req.body.phone}`;
    const content = req.body.content;

    /** 2) 보내는 사람, 받는 사람의 메일주소와 이름 */
    // 보내는 사람의 이름과 주소
    if (writer_name) {
      // ex) 문태호 <mun05170@gmail.com>
      writer_email = writer_email + " <" + writer_email + ">";
    }

    // 받는 사람의 이름과 주소
    if (receiver_name) {
      receiver_email = receiver_name + " <" + receiver_email + ">";
    }

    /** 3) 메일 발송정보 구성 */
    const send_info = {
      from: writer_email,
      to: receiver_email,
      subject: subject,
      html: content,
    };

    const smtp = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP 서버명: smtp.gamil.com
      port: 465, // SMTP 포트: 587
      secure: true, // 보안연결(SSL) 필요
      auth: { user: "mun05170@gmail.com", pass: process.env.MAIL_PASS },
    });

    /** 4) 메일발송 요청 */
    try {
      await smtp.sendMail(send_info);
    } catch (err) {
      console.error(err);
      return res.status(500).send("error");
    }
    res.status(200).send("ok");
  });
  return router;
};
