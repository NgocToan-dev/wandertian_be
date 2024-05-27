import express from "express";
import BlogService from "../../service/blogService.js";

const router = express.Router();

router.get("/", function (req, res, next) {
  const blogService = new BlogService();
  blogService.getAll().then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const news = newsData.find((news) => news.id == id);
  res.send(news);
});

export default router;
