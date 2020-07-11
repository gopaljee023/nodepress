const express = require('express');
const mssql = require('mssql');
const debug = require('debug')('app:booksRouter');
const url = require('url');

const router = express.Router(); //capital R

const nav = [
  { title: 'Books', link: '/books' },
  { title: 'Authors', link: '/authors' },
];

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false,
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false,
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  },
  {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false,
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false,
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false,
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false,
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false,
  }];

router.route('/')
  .get((req, res) => {

    const request = new mssql.Request(); // see the new keyword

    request.query('SELECT * FROM books')
      .then((result) => {
        debug(result);
        console.log('hello books');
        res.render('booksList', {
          title: 'Libaray',
          nav,
          books: result.recordset,
        });
      }).catch((err) => debug(err));
  });

router
  .route('/addbook/create')
  .get((req, res) => {
    res.render('addBooks', {
      title: 'Add Books',
      nav,
    });
  });

router
  .route('/addbook/submit')
  .post((req, res) => {
    console.log(req.body);
    const { name, author, genre } = req.body;
    const request = new mssql.Request();

    (async function insertBook() {
      try {
        debug(`insert into books (id,title,author) values (9, ${name},${author})`);
        await request.query(`insert into books (id,title,author) values (9, '${name}','${author}')`);
        console.log('inserted');
      } catch (err) {
        debug(err);
      }
    }());

    // debug(req.body);
    res.send("recevied");
  });

router
  .route('/:id')
  .get((req, res) => {
    debug('hooool');
    const request = new mssql.Request();
    // eslint-disable-next-line no-console
    console.log('hello book1 ');
    console.log(`SELECT * FROM books where id= ${req.params.id}`);
    debug(`SELECT * FROM books where id= ${req.params.id}`);
    request.query(`SELECT * FROM books where id= ${req.params.id}`)
      .then((result) => {
        debug(result);
        console.log(result.recordset);
        res.render('bookView', {
          title: 'Libaray',
          nav,
          book: result.recordset[0],
        });
      }).catch((err) => debug(err));
  });

module.exports = router;
