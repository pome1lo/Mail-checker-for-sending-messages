require('dotenv').config(); 

const nodemailer = require('nodemailer');

function send(message) {
  const { SMTP_USER, SMTP_PASS, SMTP_TO, SMTP_HOST, SMTP_PORT } = process.env;

  let transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false, // true для 465, false для других портов
    auth: {
      user: SMTP_USER, 
      pass: SMTP_PASS
    }
  });

  let mailOptions = {
    from: SMTP_USER,
    to: SMTP_TO, 
    subject: 'Mail-checker-for-sending-messages',
    text: message
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
}

const message = 'This is a test message sent by the program to check the health of the mail connection';

send(message)
  .then(response => console.log(`🟩 The email has been sent successfully: ${response}`))
  .catch(error => console.log(`🟥 Error when sending an email: ${error}`));

module.exports = { send };
