const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "aditya.it19-23@recabn.ac.in",
    subject: "Thanks for Joining in!",
    text: `Welcome to the app, ${name}. let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  console.log(email);
  sgMail.send({
    to: email,
    from: "aditya.it19-23@recabn.ac.in",
    subject: "sorry to see you go!",
    text: `Goodbye,${name}.I hope to see u back sometime soon`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
