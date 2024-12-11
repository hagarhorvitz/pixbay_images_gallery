const express = require('express');
const router = express.Router();
const { fetchImages, paginateImages, sortImages } = require('../controllers/imagesController');//imagesController

// Route to fetch images with optional sorting
router.get('/all', fetchImages);
// Route for paginated images
router.get('/paginate', paginateImages);
// Route for sorted images
router.get('/sort', sortImages);

module.exports = router;
