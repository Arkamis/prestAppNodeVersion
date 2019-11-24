const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

//seting view engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
//setings
app.use(cors({credentials: true}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'src/public'))) //making a public dir, en public va tu CSS, JS Y IMGs
//llamamos a las rutas
app.get('/', (req, res) => {
    res.status(200).json({
        funciona: "yes",
        port
    })
});
require('./src/startup/routes')(app);    
require('./src/startup/prod')(app);


var server = app.listen(port, () => {
    console.log('Server is up on port:', port)
});

module.exports = server;