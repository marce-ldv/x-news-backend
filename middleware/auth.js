

exports.auth = ( req, res ,next ) => {
    const token = req.body.authorization;

    if ( ! token ) {
        req.session = null;
        return next();
    }

    // redis

    token.replace('Bearer ', '')
}