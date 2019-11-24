const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('No se encontro la ruta puesta')
})

module.exports = router;