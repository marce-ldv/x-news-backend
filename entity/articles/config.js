module.exports = {
    auth: true,
    routes: [
        {
            path: '/articles',
            alias: '/articlez',
            type: 'getAll',
            method: 'get',
            auth: false,
        },
        {
            path: '/articles',
            type: 'insert',
            method: 'post',
        }
    ],
};
