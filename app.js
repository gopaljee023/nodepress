const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('tiny'));

app.set('views', './src/view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Gopal' });
});

app.listen(port, () => {
  // debug.log(`listening on port ${chalk.green('3000')}`); //it is working
  debug(`listening on port ${chalk.green(port)}`);
});
