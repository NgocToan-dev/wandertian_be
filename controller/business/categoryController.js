import express from "express";
import CategoryService from "../../service/categoryService.js";
import commonFn from "../socket/commonFn.js";

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

// create category
router.post("/add", (req, res) => {
  const data = req.body;
  const categoryService = new CategoryService();
  categoryService.create(data).then((result) => {
    res.send(result);
    commonFn.update_di_cache("category");
  });
});

// update category
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const categoryService = new CategoryService();
  categoryService.update(id, data).then((result) => {
    res.send(result);
    commonFn.update_di_cache("category");
  });
});

// delete category
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const categoryService = new CategoryService();
  categoryService.delete(id).then((result) => {
    res.send(result);
    commonFn.update_di_cache("category");
  });
});

export default router;
