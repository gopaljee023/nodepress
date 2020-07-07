const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

// app.get('/',(req,res)=>{
//     res.send('Hello Gopal');
// });

app.get('/greet', (req, res) => {
  res.send('Hello Gopal');
});

app.listen(3000, () => {
  // debug.log(`listening on port ${chalk.green('3000')}`); //it is working
  debug(`listening on port ${chalk.green('3000')}`);
});
