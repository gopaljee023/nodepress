const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('tiny'));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/js')));
app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/view');
app.set('view engine', 'ejs');

//registering the booksRouter for "/books/*"
app.use('/books', require('./routes/booksRouter'));

const adminRouter = require('./routes/adminRouter')();
app.use('/admin', adminRouter);

const authRouter = require('./routes/authRouter')();
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Libaray',
    nav: [
      { title: 'Books', link: '/books' },
      { title: 'Authors', link: '/authors' },
    ],
  });
});

app.listen(port, () => {
  // debug.log(`listening on port ${chalk.green('3000')}`); //it is working
  debug(`listening on port ${chalk.green(port)}`);
});
