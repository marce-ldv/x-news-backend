const express = require('express');
const morgan = require('morgan');
// const articlesController = require('./entity/articles/controller');
const articles = require('./entity/articles/router');
const user = require('./entity/user/router');

const app = express();
const serverPort = 4000;

app.use(express.json());
app.use(morgan('dev'));
app.use( '/articles', articles );
app.use( '/user', user );

app.listen(process.env.PORT || serverPort, () => {
    console.log(`Listen on port ${serverPort}`)
})

app.get('/',( req, res ) => {
    res.send('works');
})

/*
app.get( '/articles', (req,res,next) => {
    console.log(req.headers)

    articlesController.getAll(req,res,next);
} );

app.post( '/articles', (req,res,next) => {
    articlesController.insert(req,res,next);
} );

app.put( '/articles', (req,res,next) => {
    articlesController.update(req,res,next);
} );

app.delete( '/articles', (req,res,next) => {
    articlesController.delete(req,res,next);
} );
*/