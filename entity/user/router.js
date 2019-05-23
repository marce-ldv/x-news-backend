const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.get( '/', controller.login );

module.exports = router;