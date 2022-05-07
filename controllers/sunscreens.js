//const { create } = require("../models/sunscreen")
const sunscreen = require('../models/sunscreen');
const Sunscreen = require('../models/sunscreen')

module.exports = {
  new: newSunscreen,
  create,
  index
}

function newSunscreen(req, res) {
res.render('sunscreens/new')

}

function create(req, res) {
  // convert like's checkbox of nothing or "on" to boolean
  req.body.like = !!req.body.like;
  // remove whitespace next to commas
  req.body.notes = req.body.notes.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.notes) req.body.notes = req.body.notes.split(',');
  const sunscreen = new Sunscreen(req.body);
  sunscreen.save(function(err) {
    // one way to handle errors
    if (err) return res.render('sunscreens/new');
    console.log(sunscreen);
    // for now, redirect right back to new.ejs
    res.redirect('/sunscreens/new');
  });
}

function index(req, res) {
  Sunscreen.find({}, function(err, sunscreens) {
    console.log(sunscreens)
    //res.send('okay!')
    res.render('sunscreens/index', { sunscreens });
  });
}