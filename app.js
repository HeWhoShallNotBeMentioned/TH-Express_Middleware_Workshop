const express = require('express');
const fav = require('./fav');
const app = express();
app.use(fav);

app.use('/one', (req, res, next)=>{
  req.message = 'This message made it!';
  console.log("one");
  next();
}, (req, res, next)=>{
  console.log("one point five");
  next();
});

app.use((req, res, next)=>{
  console.log(req.message);
  next();
});

app.use((req, res) => res.send('<h1>Express is working!</h1>'));
app.listen(3000);
