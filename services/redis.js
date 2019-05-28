const redis = require('redis');

// must create a token expire function
/**
 * set
 * @param key
 * @param value
 * @param callback
 */
exports.set = (key, value, callback) => {
    const client = redis.createClient();

    client.on('err', () => {
        return callback(err);
    })

    client.set(key, value, (err, result) => {
        client.quit();
        return callback(err, result);
    });
}

/**
 * get
 * @param key
 * @param callback
 */
exports.get = (key, callback) => {
    const client = redis.createClient();

    client.on('err', () => {
        return callback(err);
    })

    client.get(key, (err, result) => {
        client.quit();
        return callback(err, result);
    });
}

/**
 * delete
 * @param key
 * @param callback
 */
exports.delete = (key, callback) => {
    const client = redis.createClient();

    client.on('err', () => {
        return callback(err);
    })

    client.del(key, (err, result) => {
        client.quit();
        return callback(err, result);
    });
}