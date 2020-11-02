//install the required modules
const OAuth2 = google.auth.OAuth2;
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
//to read files
const fs = require('fs');
const request = require('request')

//set up express server and port
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// To parse data from credentials.json
let dataCredentials = fs.readFileSync('credentials.json');
let credentialsInfo = JSON.parse(dataCredentials);

//To parse data from token.json
let dataToken = fs.readFileSync('token.json');
let tokenInfo = JSON.parse(dataToken);

//setting OAuth2Client
const myOAuth2Client = new OAuth2(
  credentialsInfo.installed.client_id,
  credentialsInfo.installed.client_secret,
  "https://developers.google.com/oauthplayground"
)
//setting OAuth2Client credentials
myOAuth2Client.setCredentials({
  refresh_token: tokenInfo.refresh_token,
});

const url = 'https://www.googleapis.com/gmail/v1/users/me/profile?access_token='+tokenInfo.access_token

var sender, transport
const myAccessToken = myOAuth2Client.getAccessToken()
request({ url: url, json: true}, (err, data) => {
  sender=data.body.emailAddress
  transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: sender, //your gmail account you used to set the project up in google cloud console"
         clientId: credentialsInfo.installed.client_id,
         clientSecret: credentialsInfo.installed.client_secret,
         refreshToken: tokenInfo.refresh_token,
         accessToken: myAccessToken //access token variable we defined earlier
  },
   tls:{
    rejectUnauthorized: false
  }});
})




// Post request to send mail.
app.post('/sendemail',function(req,res){
  const mailOptions = {
  from: sender, // sender email address
  to: req.body.email, // receiver email address
  subject: 'mail from nodemailer', // Subject
  html: '<p>This is an auto-generated mail.</p>'// html body
  }
  transport.sendMail(mailOptions,function(err,result){
  if(err){
    console.log(err)
  res.send({
  message:err
  })
  }else{
  transport.close();
  res.send({
  message:'Check your inbox!'})}
})
})

app.get('/',function(req,res){
  res.send({
  message:'Default route'
  })
});

app.listen(PORT, function (req, res) {
  console.log(`Listening on port ${PORT}`);
})