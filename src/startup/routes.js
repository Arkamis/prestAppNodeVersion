const users = require('../routes/users');
const notFound = require('../routes/not_found');

module.exports = function (app){
    app.use('/usuarios', users);
    app.all('*', notFound);
}