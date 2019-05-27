const express = require('express');
const morgan = require('morgan');
const articles = require('./entity/articles/router');
const user = require('./entity/user/router');
const auth = require('./middleware/auth');

const app = express();
const serverPort = 4000;

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(auth.auth);
app.use( '/articles', articles );
app.use( '/user', user );

app.listen(process.env.PORT || serverPort, () => {
    console.log(`Listen on port ${serverPort}`)
});

app.get('/',( req, res ) => {
    res.send('works');
});