const redis = require('redis');
/*
exports.get = (key, callback) => {
    return cb(null, results)
}
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

// get
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

// del key
