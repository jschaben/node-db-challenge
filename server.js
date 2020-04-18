const express = require("express");
const helmet = require("helmet");


const db = require("./projects/project-model");

const server = express();

const projectRouter = require("./projects/project-router");

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.post("/tasks", (req, res) => {
  const taskData = req.body;

  db.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => res.status(500).json({ message: "Error creating task" }));
});

server.get("/tasks", (req, res) => {
  db.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({ message: "Error getting tasks" }));
});

server.get("/resources", (req, res) => {
  db.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => res.status(500).json({ message: "Error getting resources" }));
});

server.post("/resources", (req, res) => {
  const resourceData = req.body;
  db.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => res.status(500).json({ message: "Error adding resource" }));
});

module.exports = server;