const express = require('express')
const router = express.Router();
const filmController = require('../controllers/filmController')

//index
router.get('/', filmController.index);

//show
router.get('/:id', filmController.show);

//Store
router.post('/:id/reviews', filmController.storeReview)


module.exports = router