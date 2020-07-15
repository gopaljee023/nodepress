const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/js')));

app.set('views', './src/view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index',
    {
      title: 'Library',
      nav: ['Books', 'Authors']
    });
});

app.listen(port, () => {
  // debug.log(`listening on port ${chalk.green('3000')}`); //it is working
  debug(`listening on port ${chalk.green(port)}`);
});
