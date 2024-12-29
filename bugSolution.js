const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.send('Success!');
    } else {
      //Proper error handling
      return res.status(500).send('Something went wrong!');
    }
  }, 1000);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});