import express from "express";
import CategoryService from "../../service/categoryService.js";

const router = express.Router();

// Get all
router.get("/", (req, res) => {
  const categoryService = new CategoryService();
  categoryService.getAll().then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const categoryService = new CategoryService();
  categoryService.getById(id).then((result) => {
    res.send(result);
  });
});

// update blog
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const categoryService = new CategoryService();
  categoryService.update(id, data).then((result) => {
    res.send(result);
  });
});

export default router;
