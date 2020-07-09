const express = require('express');

const router = express.Router(); //capital R

router
    .route('/:id')
    .get((req, res) => {
        res.send(`clicked ${req.params.id}`);
    });

module.exports = router;
