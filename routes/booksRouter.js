const express = require('express');
const mssql = require('mssql');
const debug = require('debug')('app:booksRouter');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router(); //capital R

const nav = [
  { title: 'Books', link: '/books' },
  { title: 'Authors', link: '/authors' },
];

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
  .post(upload.single('photo'), (req, res) => {
    const { name, author } = req.body;
    const request = new mssql.Request();

    if (req.file) {
      console.log("uploaded file" ,req.file);
    }
    (async function insertBook() {
      try {
        await request.query(`insert into books (id,title,author) values (10, '${name}','${author}')`);
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
