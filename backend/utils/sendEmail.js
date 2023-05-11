// const nodemailer = require("nodemailer");
// const {google} = require ("googleapis")

// const OAuth2 = google.auth.OAuth2;

// const OAuth2Client = new OAuth2 (
//     process.env.GOOGLE_GMAIL_CLIENT_ID,
//     process.env.GOOGLE_GMAIL_CLIENT_SECRET,
//     process.env.GOOGLE_GMAIL_REDIRECT_URI,

// )

// OAuth2Client.setCredentials({
//     refresh_token: process.env.GOOGLE_GMAIL_REFRESH_TOKEN
// })

// const accessToken = new Promise ((resolve, reject) => {
//     OAuth2Client.getAccessToken((err, token)=> {
//         if(err) reject(err)
//         resolve(token)
//     })
// })

// const sendEmail = (options) => {
     
//     const transporter = nodemailer.createTransport({
//         service: process.env.SERVICE,
//         host:"smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth:{
//             type: "OAuth2",
//             user: process.env.EMAIL_USERNAME,
//             clientId: process.env.GOOGLE_GMAIL_CLIENT_ID,
//             accessToken: accessToken,
//             clientSecret: process.env.GOOGLE_GMAIL_CLIENT_SECRET,
//             refreshToken: process.env.GOOGLE_GMAIL_REFRESH_TOKEN
//         }
//     })

//     const mailOptions = {
//         from: "Katenga's Company",
//         to: options.to,
//         subject: options.subject,
//         html: options.text
//     }

//   transporter.sendMail(mailOptions, function(err, info){
    
//     if(!err){
//         console.log(info)
//     } else{
//         console.log(err)
//     }

//   })

// }

// module.exports = sendEmail;

