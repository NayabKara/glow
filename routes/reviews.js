const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

//POST /sunscreens/:id/review
router.post('/sunscreens/:id/reviews', reviewsCtrl.create)

//router.get('/sunscreens/:id/reviews/edit', )



module.exports = router