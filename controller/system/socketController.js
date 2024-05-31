import express from "express";
import BlogService from "../../service/blogService.js";

const router = express.Router();

// Get all
router.get("/", (req, res) => {
  const blogService = new BlogService();
  blogService.getAll().then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
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

export default router;
