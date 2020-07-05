var express = require('express')

var app = express();

app.get('/',(req,res)=>{
    res.send('Hello Gopal');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})
