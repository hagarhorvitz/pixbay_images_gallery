const axios = require('axios');
const PIXABAY_API = 'https://pixabay.com/api/';
const API_KEY = process.env.PIXABAY_API_KEY;

exports.fetchImages = async function (req, res) {
    try {
        const { category = 'nature' } = req.query;
        const response = await axios.get(`${PIXABAY_API}?key=${API_KEY}&q=${category}`);
        console.log("fetchImages: ", response.data.hits)
        res.status(200).json(response.data.hits);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching images', error: error.message });
    }
};

exports.paginateImages = async function (req, res) {
    try {
        const { category = 'nature', page = 1 } = req.query;
        const per_page = 9;
        const params = {
            key: API_KEY,
            q: category,
            page,
            per_page,
        }
        const response = await axios.get(`${PIXABAY_API}`, {
            params: {
               ...params
            },
        });
        console.log("paginateImages response.data: ", response.data)
        console.log("params: ", params)
        console.log("==================================================")
        console.log("paginateImages response.data.hits : ", response.data.hits)
        res.status(200).json(response.data.hits);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching paginated images', error: error.message });
    }
};

// Sort images by ID or Date
exports.sortImages = async function (req, res) {
    try {
        const { category = 'nature', sortBy = 'id', page = 1 } = req.query;
        // const response = await axios.get(`${PIXABAY_API}?key=${API_KEY}&q=${category}`);
        const per_page = 9;
        const response = await axios.get(`${PIXABAY_API}`, {
            params: {
                key: API_KEY,
                q: category,
                page,
                per_page,
            },
        });
        console.log("sortImages response.data: ", response.data)
        console.log("==================================================")
        const sortedData = response.data.hits.sort((a, b) =>
            sortBy === 'date' ? new Date(b[sortBy]) - new Date(a[sortBy]) : a[sortBy] - b[sortBy]
        );
        console.log("sortImages: ", sortBy)
        res.status(200).json(sortedData);
    } catch (error) {
        res.status(500).json({ message: 'Error sorting images', error: error.message });
    }
};
