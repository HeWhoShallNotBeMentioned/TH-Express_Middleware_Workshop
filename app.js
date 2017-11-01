const express = require('express');
const fav = require('./fav');
const app = express();
app.use(fav);
    //'/one',
app.use( (req, res, next)=>{
  //req.message = 'This message made it!';
  console.log("hello");
  const err = new Error('Holy Smokes!');
  next(err);
}
// , (req, res, next)=>{
//   console.log("one point five");
//   next();
// }
);

app.use((req, res, next)=>{
  console.log("World");
  //console.log(req.message);
  next();
});

app.use((req, res) => res.send('<h1>Express is working!</h1>'));
app.listen(3000);
