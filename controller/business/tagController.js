import express from "express";
import TagService from "../../service/tagService.js";
import commonFn from "../socket/commonFn.js";

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

// create tag
router.post("/add", (req, res) => {
  const data = req.body;
  const tagService = new TagService();
  tagService.create(data).then((result) => {
    res.send(result);
    commonFn.update_di_cache("tag");
  });
});

// update tag
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const tagService = new TagService();
  tagService.update(id, data).then((result) => {
    res.send(result);
    commonFn.update_di_cache("tag");
  });
});

// delete tag
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const tagService = new TagService();
  tagService.delete(id).then((result) => {
    res.send(result);
    commonFn.update_di_cache("tag");
  });
});

export default router;
