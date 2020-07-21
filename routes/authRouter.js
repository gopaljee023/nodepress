const express = require('express');
const { MongoClient } = require('mongodb');

const debug = require('debug')('app:adminRouter');

const authRouter = express.Router(); //capital R


// router name will be exported.
function router(){
   
    authRouter.route('/signup')
    .post((req, res) => {

        res.
    });
    return authRouter;

}

module.exports = router;