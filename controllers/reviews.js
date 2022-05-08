const Sunscreen = require('../models/sunscreen');



module.exports = {
  create
};

function create(req, res) {
  Sunscreen.findById(req.params.id, function(err, sunscreen) {
    sunscreen.reviews.push(req.body);
    sunscreen.save(function(err) {
      res.redirect(`/sunscreens/${sunscreen._id}`);

    });
  });
}