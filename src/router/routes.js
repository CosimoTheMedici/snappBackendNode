const express = require('express')
const router = express.Router();



const dataController = require('../controllers/data.controller');



router.get('/',dataController.getTopMovies);
router.get('/:name',dataController.getMovieByName);
router.get('/paginator/page=:page&limit=:limit',dataController.getAll);

//http://localhost:5000/movies/page=3&limit=9

module.exports = router;