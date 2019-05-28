module.exports = {
    port: 4000,
    mysql: {
        host: process.env.NEWS_MYSQL_HOST || '127.0.0.1',
        user: process.env.NEWS_MYSQL_USER || 'root',
        password: process.env.NEWS_MYSQL_PASS || 'a',
        database: process.env.NEWS_MYSQL_DB || 'news',
    },
    redis: {
        host: process.env.NEWS_REDIS_HOST || '',
        port: process.env.NEWS_REDIS_PORT || '',
    }
}