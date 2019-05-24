const redis = require('redis');

// must create a token expire function

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
