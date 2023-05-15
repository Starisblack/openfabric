const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


const sendEmail = (options) => {
    
    const mailOptions = {
        from: "OpenFabric Company",
        to: options.to,
        subject: options.subject,
        html: options.text
    }

  transporter.sendMail(mailOptions, function(err, info){
    
    if(!err){
        console.log(info)
    } else{
        console.log(err)
    }

  })

}

module.exports = sendEmail;

