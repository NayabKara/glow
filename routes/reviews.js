const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

//POST /sunscreens/:id/review
router.post('/sunscreens/:id/reviews', reviewsCtrl.create)


module.exports = router