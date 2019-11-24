const express = require('express');
const router = express.Router();

router.get('/login', (req,res) => {
    res.send('Aqui va los templates')
});

router.get('/sign-up', (req, res) => {
    res.send('Aqui va los templates')
});

router.get('/dashboard', (req, res) => {
   res.send('Aqui va el template del dashboard') 
});

module.exports = router;