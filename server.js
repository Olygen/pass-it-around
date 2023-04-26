const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // const numOfBottles = 99;
    const numOfBottles = 99;
    const nextNumOfBottles = numOfBottles - 1;
    let link = '';

    if(nextNumOfBottles > 0) {
        link = `<h2><a href="/${nextNumOfBottles}">take one down, pass it around</a></h2>`;
    } else {
        link = '<h2><a href="/">start over</a></h2>'
    }
  
    res.send(`<h1>${numOfBottles} Bottles of beer on the wall</h1>${link}`);
});

//In the second route handler for the dynamic path ('/:numOfBottles'), we get the value of numOfBottles from the route parameter using req.params.numOfBottles.
app.get('/:numOfBottles', (req, res) => {
    const numOfBottles = parseInt(req.params.numOfBottles);
    let link = '';

// adding bottles at some point checking random number as a condition
    if (Math.random() < 0.9) {
    const nextNumOfBottles = numOfBottles - 1;
    
    if(nextNumOfBottles > 0) {
        link = `<h2><a href="/${nextNumOfBottles}">take one down, pass it around</a></h2>`;
    } else {
        link = '<h2><a href="/">start over</a></h2>'
    }
  } else {
    const nextNumOfBottles = numOfBottles + Math.random()*100/5;
    link = `<h2><a href="/${nextNumOfBottles}" style="color: green;">Surpise!</a></h2>`;
  }

  res.send(`<h1>${numOfBottles} Bottles of beer on the wall</h1>${link}`);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });