var express = require('express');
const hats_controlers= require('../controllers/hats');
var router = express.Router();
/* GET hats */
router.get('/', hats_controlers.hats_view_all_Page);
module.exports = router;
