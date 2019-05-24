const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.post( '/login', controller.login );
router.post( '/register', controller.register );

module.exports = router;