module.exports = (app) => {
  const router = require("express").Router();
  const nodemailer = require("nodemailer");

  router.post("/send_mail", async (req, res) => {
    /** 1) 프론트엔드에서 전달한 사용자 입력값 */
    const subject = req.body.subject;
    const content = req.body.content;

    /** 2) 보내는 사람, 받는 사람의 메일주소와 이름 */
    // 보내는 사람의 이름과 주소
    // if (writer_name) {
    //   // ex) 문태호 <mun05170@gmail.com>
    //   writer_email = writer_email + " <" + writer_email + ">";
    // }

    // 받는 사람의 이름과 주소
    // if (receiver_name) {
    //   receiver_email = receiver_name + " <" + receiver_email + ">";
    // }
    writer_email = "문태호 <mun05170@gmail.com>";
    receiver_email = "문태호 <mun05170@gmail.com>";

    /** 3) 메일 발송정보 구성 */
    const send_info = {
      from: "mun05170@gmail.com",
      to: "mun05170@naver.com",
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
