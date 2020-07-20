const express = require('express');
const { MongoClient } = require('mongodb');

const debug = require('debug')('app:adminRouter');

const adminRouter = express.Router(); //capital R

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

function router() {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'LibaryApp';
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url); //connect to mongoserver
          const db = client.db(dbName); //pull a database
          debug('Conneceted');

         const response = await db.collection('books').insertMany(books);
         debug(response);
         res.json(response); //send json body to client
        }
        catch (err) {
          debug(err.stack);
        }
        finally{
          client.db('books').dropDatabase();
          client.close();
          clein
        }
        res.send(' Hello from adminaa');
      }());

    });
  return adminRouter;
}
module.exports = router;