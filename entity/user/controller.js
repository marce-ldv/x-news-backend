const poolPromise = require('../../services/mysql');
const redisService = require('../../services/redis');
const queries = require('./queries');
const { generateToken } = require('../../helpers/utils');

exports.login = async (req,res,next) => {
    const { username, password } = req.body;
    let rows;
    try{
        resultSet = await poolPromise.query(queries.getUserByUsername, [username,password]);
        rows = resultSet[0];
        if ( ! rows.length ) {
            return res.status(400).send('User not found.');
        }

    }catch(e) {
        console.log(e)
        return res.status(500).end();
    }
    // generate token
    // you can set the token length in the param
    const token = generateToken(40);

    // set token in redis
    redisService.set(`Token_${token}`, JSON.stringify(rows[0]) ,( err, result ) => {
        console.log(result);
        res.send(token);
    });

    exports.register = async (req,res,next) => {

        res.end();
    }

}