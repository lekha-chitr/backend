var express = require('express');
var router = express.Router();
let hi = require('../controllers/indexController')
/* GET home page. */
router.get('/', hi.gg);
router.get('/yo', hi.yo);


module.exports = router;