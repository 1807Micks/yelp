const express = require('express')
const router = express.Router({ mergeParams: true} )
const { reviewSchema } = require('../schemas');
const Review = require('../models/review');
const Campground = require('../models/campground');
const catchAsync = require('../utils/catchAsync');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')
const reviews = require('../controllers/reviews')

//reviews
router.post('/', validateReview, isLoggedIn, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router