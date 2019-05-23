const poolPromise = require('../../services/mysql');
const queries = require('./queries');

exports.login = async (req,res,next) => {
    const { username, password } = req.body;

    try{
        const [rows] = await poolPromise.query(queries.login);
        res.status(200).send(rows);
    }catch(e) {
        res.status(500).end();
    }

    // generate token
    

    // set token in redis

    // send response

}