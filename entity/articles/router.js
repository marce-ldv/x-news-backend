const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.get( '/', controller.getAll );
router.post( '/', controller.insert );
router.put( '/', controller.update );
router.delete( '/', controller.delete );

module.exports = router;