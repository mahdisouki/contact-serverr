const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
var cors = require('cors')
app.use(cors());
require('dotenv').config();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); 


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.post('/contact', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        }
      });
      
      var mailOptions = {
        from:req.body.email ,
        to: 'contact@designedanddusted.co.uk',
        subject: "contact request from : " + req.body.name,
        text:"phone number : " + req.body.phone + "\n" + "Company: " + req.body.company + "\n" + "message: " + req.body.message 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send();
    
  });
  app.post('/sayHi', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        }
      });
      
      var mailOptions = {
        from:req.body.email ,
        to: 'contact@designedanddusted.co.uk',
        subject: "message request from : " + req.body.name,
        text:"email : " + req.body.email + "\n" + "message: " + req.body.message 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send();
    
  });

















app.listen("5000" , ()=>{console.log("server is connected")})