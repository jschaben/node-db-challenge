const router = require("express").Router();

const db = require("./project-model");

router.get("/", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ message: "server error" }));
});

router.get("/all", (req, res) => {
  db.getAllProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ message: "Error" }));
});

router.post("/", (req, res) => {
  const projectData = req.body;

  db.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => res.status(500).json({ message: "server error" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getProjectById(id).then(project => {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "project not found" });
    }
  });
});

module.exports = router;