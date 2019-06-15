const poolPromise = require('../../services/mysql');
const redisService = require('../../services/redis');
const queries = require('./queries');
const crypto = require('crypto');
const { generateToken } = require('../../helpers/utils');

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*|*|void>}
 */
exports.login = async (req,res,next) => {
    const { username, password } = req.body;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    let rows;

    try{
        resultSet = await poolPromise.query(queries.getUserByUsernamePassword, [username,hash]);
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
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
exports.register = async (req,res,next) => {
    const { username, password } = req.body;
    const hash = crypto.createHash('sha256').update(password).digest('hex');

    try{
        resultSet = await poolPromise.query(queries.insertUser, [{username,password: hash}]);
        rows = resultSet[0];

    }catch(e) {
        console.log(e)
        return res.status(500).end();
    }
    
    return res.end();
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.logout = async (req,res,next) => {
    const token = req.session.token;

    redisService.delete(`Token_${token}`, ( err ) => {
        if( err ) return res.status(500).send('Internal Server Error');

        return res.status(200).end();
    })
}