import express from "express";
import TagService from "../../service/tagService.js";

const router = express.Router();

// Get all
router.get("/", (req, res) => {
  const tagService = new TagService();
  tagService.getAll().then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const tagService = new TagService();
  tagService.getById(id).then((result) => {
    res.send(result);
  });
});

// update blog
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const tagService = new TagService();
  tagService.update(id, data).then((result) => {
    res.send(result);
  });
});

export default router;
