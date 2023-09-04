const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);
router.post("/", movieController.validateMovie, movieController.createMovie);
router.put("/:id", movieController.validateMovie, movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
