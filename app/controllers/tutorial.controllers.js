const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.createTutorial = (req, res) => {
  Tutorial.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    } else {
      res.json(data);
    }
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAllTutorials = (req, res) => {
  Tutorial.getAll(req.query.title, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tutorials.",
      });
    } else {
      res.json(data);
    }
  });
};

// Find a single Tutorial with a id
exports.findOneTutorial = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Tutorial.",
      });
    } else {
      res.json(data);
    }
  });
};

// find all published Tutorials
exports.findAllPublishedTutorials = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving published Tutorials.",
      });
    } else {
      res.json(data);
    }
  });
};

// Update a Tutorial identified by the id in the request
exports.updateTutorial = (req, res) => {
  Tutorial.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Tutorial.",
      });
    } else {
      res.json(data);
    }
  });
};

// Delete a Tutorial with the specified id in the request
exports.deleteTutorial = (req, res) => {
  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Tutorial.",
      });
    } else {
      res.json(data);
    }
  });
};

// Delete all Tutorials from the database.
exports.deleteAllTutorials = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting all Tutorials.",
      });
    } else {
      res.json(data);
    }
  });
};
