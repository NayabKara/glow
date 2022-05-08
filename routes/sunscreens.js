var express = require('express');
var router = express.Router();

let sunscreensCtrl = require('../controllers/sunscreens')

/* GET users listing. */

router.get('/', sunscreensCtrl.index);
router.get('/new', sunscreensCtrl.new);
router.post('/', sunscreensCtrl.create);

//show functionality- GET request path-ing: GET /sunscreens/:id
router.get('/:id', sunscreensCtrl.show);


module.exports = router;
