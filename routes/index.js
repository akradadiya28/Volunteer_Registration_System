const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/data', controller.dataController);
router.get('/', controller.defaultController);
router.get('/view', controller.viewController);
router.post('/addController', controller.addController);
router.get('/editController/:id', controller.editController);
router.post('/updateController/:id', controller.updateController);
router.get('/removeController/:id', controller.removeController);

module.exports = router;