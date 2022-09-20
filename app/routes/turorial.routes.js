module.exports = app => {
  const demoDb = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", demoDb.create);

  // Retrieve all demoDb
  router.get("/", demoDb.findAll);

  // Retrieve all published demoDb
  router.get("/published", demoDb.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", demoDb.findOne);

  // Update a Tutorial with id
  router.put("/:id", demoDb.update);

  // Delete a Tutorial with id
  router.delete("/:id", demoDb.delete);

  // Create a new Tutorial
  router.delete("/", demoDb.deleteAll);

  app.use("/api/demoDb", router);
};
