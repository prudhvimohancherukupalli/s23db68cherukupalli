var express = require('express');
const hats_controlers = require('../controllers/hats');
var router = express.Router();

// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET hats */
router.get('/', hats_controlers.hats_view_all_Page);
router.get('/detail', hats_controlers.hats_view_one_Page);
router.get('/create', secured,hats_controlers.hats_create_Page);
router.get('/update', secured, hats_controlers.hats_update_Page);
router.get('/delete', secured,hats_controlers.hats_delete_Page);
module.exports = router;
