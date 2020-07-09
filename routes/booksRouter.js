const express = require('express');

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
    read: false
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
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
    read: false
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }];


router.route('/')
  .get((req, res) => {
    res.render('booksList', {
      title: 'Libaray',
      nav,
      books,
    });
  });

router
  .route('/:id')
  .get((req, res) => {
    res.render('bookView', {
      title: 'Libaray',
      nav,
      book: books[req.params.id],
    });
  });


module.exports = router;
