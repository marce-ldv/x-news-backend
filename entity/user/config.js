module.exports = {
    auth: true,
    routes: [
        {
            path: '/user',
            alias: '/userz',
            type: 'login',
            method: 'post',
            auth: false,
        },
        {
            path: '/user',
            type: 'register',
            method: 'post',
        }
    ],
};
