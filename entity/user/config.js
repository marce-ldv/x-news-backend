module.exports = {
    auth: true,
    routes: [
        {
            path: '/user',
            alias: '/userz',
            type: 'login',
            method: 'post',
            auth: false,
            input: {
                body: {
                    username: {
                        type: 'string',
                        maxLength: 50,
                        minLength: 4
                    },
                    password: {
                        type: 'string',
                        maxLength: 50,
                        minLength: 5
                    },
                }
            }
        },
        {
            path: '/user',
            type: 'register',
            method: 'post',
        }
    ],
};
