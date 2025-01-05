const express = require('express');
const router = express.Router();
const { fetchImages, paginateImages, sortImages } = require('../controllers/imagesController');

router.get('/all', fetchImages);
router.get('/paginate', paginateImages);
router.get('/sort', sortImages);

module.exports = router;
