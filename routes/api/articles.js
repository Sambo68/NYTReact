const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const nytController = require("../../controllers/nytController");

router.route("/search/:topic/:startYear/:endYear/:n")
   .get(nytController.findAll);

// Matches with "/api/articles"
router.route("/saved")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;