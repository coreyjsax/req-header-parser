const express = require('express');
const app = express();

const path = require('path');
const server = require('http').createServer(app);

const apiRoutes = require('./routes/apiRoutes');
const appRoutes = require('./routes/appRoutes');

app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/whoami', apiRoutes);

app.use('/', appRoutes)

module.exports = app 



app.start = app.listen = function(){
    return server.listen.apply(server, arguments)
}

app.start(process.env.PORT, () => {
    console.log('Request header server started')
});