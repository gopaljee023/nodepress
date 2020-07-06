var express = require('express')
var chalk = require('chalk')
var debug = require('debug')('app')
 var morgan = require('morgan');

var app = express();

app.use(morgan("tiny"));

// app.get('/',(req,res)=>{
//     res.send('Hello Gopal');
// });

app.get('/greet',(req,res)=>{
    res.send('Hello Gopal');
});

app.listen(3000, ()=>{
    //debug.log(`listening on port ${chalk.green('3000')}`); //it is working
    debug(`listening on port ${chalk.green('3000')}`);
});
