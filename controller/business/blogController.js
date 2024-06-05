import express from "express";
import BlogService from "../../service/blogService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const blogService = new BlogService();
  blogService.getAll().then((result) => {
    res.send(result);
  });
});

// get blog by limit and skip
router.post("/list", (req, res) => {
  const page = Number(req.body.page) || 0;
  const limit = Number(req.body.limit) || 20;
  const filter = req.body.filter || "";
  const blogService = new BlogService();
  blogService.getPaging(page, limit, filter).then((result) => {
    res.send(result);
  });
});
// get total page and summary of blog
router.post("/listSummary", (req, res) => {
  const filter = req.body.filter || "";
  const blogService = new BlogService();
  blogService.getPagingSummary(filter).then((result) => {
    res.send(result);
  });
});

// create blog
router.post("/add", (req, res) => {
  const data = req.body;
  const blogService = new BlogService();
  blogService.create(data).then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  // check id is ObjectId
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return;
  }
  const blogService = new BlogService();
  blogService.getById(id).then((result) => {
    res.send(result);
  });
});

// update blog
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const blogService = new BlogService();
  blogService.update(id, data).then((result) => {
    res.send(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const blogService = new BlogService();
  blogService.delete(id).then((result) => {
    res.send(result);
  });
});

export default router;
