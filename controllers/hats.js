var hats = require('../models/hats');
// List of all hatss
exports.hats_list = function(req, res) {
res.send('NOT IMPLEMENTED: hats list');
};
// for a specific hats.
exports.hats_detail = function(req, res) {
res.send('NOT IMPLEMENTED: hats detail: ' + req.params.id);
};
// Handle hats create on POST.
exports.hats_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: hats create POST');
};
// Handle hats delete form on DELETE.
exports.hats_delete = function(req, res) {
res.send('NOT IMPLEMENTED: hats delete DELETE ' + req.params.id);
};
// Handle hats update form on PUT.
exports.hats_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: hats update PUT' + req.params.id);
};

exports.hats_list = async function(req, res) {
    try{
    theHats = await hats.find();
    res.send(theHats);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };