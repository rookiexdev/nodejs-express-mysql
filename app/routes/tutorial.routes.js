const {
  createTutorial,
  deleteAllTutorials,
  deleteTutorial,
  findAllPublishedTutorials,
  findAllTutorials,
  findOneTutorial,
  updateTutorial,
} = require("../controllers/tutorial.controllers.js");

const router = require("express").Router();

router.post("/", createTutorial);

router.get("/", findAllTutorials);

router.get("/published", findAllPublishedTutorials);

router.get("/:id", findOneTutorial);

router.put("/:id", updateTutorial);

router.delete("/:id", deleteTutorial);

router.delete("/", deleteAllTutorials);

module.exports = router;