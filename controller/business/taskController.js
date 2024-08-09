import express from "express";
import TaskService from "../../service/taskService.js";

const router = express.Router();

// Get all
router.get("/", (req, res) => {
  const taskService = new TaskService();
  taskService
    .getAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const taskService = new TaskService();
  taskService
    .getById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// get blog by limit and skip
router.post("/list", (req, res) => {
  const page = Number(req.body.page) || 0;
  const limit = Number(req.body.limit) || 20;
  const filter = req.body.filter || "";
  const filterStatus = req.body.filterStatus || "";
  const column = req.body.column || "";
  const taskService = new TaskService();
  taskService
    .getPaging({ page, limit, filter, filterStatus, column })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
// get total page and summary of blog
router.post("/listSummary", (req, res) => {
  const filter = req.body.filter || "";
  const filterStatus = req.body.filterStatus || "";
  const taskService = new TaskService();
  taskService
    .getPagingSummary(filter, filterStatus)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// create task
router.post("/add", (req, res) => {
  const data = req.body;
  const taskService = new TaskService();
  taskService
    .create(data)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// update task
router.put("/:id", (req, res) => {
  const data = req.body;
  const taskService = new TaskService();
  taskService
    .update(data)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// delete task
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const taskService = new TaskService();
  taskService
    .delete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default router;
