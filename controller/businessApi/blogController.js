import express from "express";
import BlogService from "../../service/blogService.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const blogService = new BlogService();
  blogService.getById(id).then((result) => {
    res.send(result);
  });
});

export default router;
