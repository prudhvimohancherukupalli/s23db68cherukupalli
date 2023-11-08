var hats = require('../models/hats');
// List of all hats
exports.hats_list = function(req, res) {
res.send('NOT IMPLEMENTED: hats list');
};
// for a specific hats.
exports.hats_detail = function(req, res) {
res.send('NOT IMPLEMENTED: hats detail: ' + req.params.id);
};
// Handle hats create on POST.
exports.hats_create_post = async function(req, res) {
    console.log(req.body)
let document = new hats();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"hats_type":"goat", "cost":12, "size":"large"}
document.style = req.body.style;
document.color = req.body.color;
document.price = req.body.price;
try{
    let result = await document.save();
    res.send(result);
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
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

    exports.hats_view_all_Page = async function(req, res) {
        try{
        thehats = await hats.find();
        res.render('hats', { title: 'hats Search Results', DBresults: thehats });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };

