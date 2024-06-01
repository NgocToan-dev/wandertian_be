import express from "express";
import BlogService from "../../service/blogService.js";

const router = express.Router();

/**
 * @swagger
 * /blog:
 *  get:
 *   summary: Get all blogs
 *   description: Get all blogs
 *   responses:
 *    200:
 *      description: A list of blogs.
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *           data:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *               id:
 *                 type: string
 *                 description: _id blog.
 *                 example: 60f3b3b3e4b0b3b4c8f3b3b3
 *               title:   
 *                 type: string
 *                 description: Title of blog.
 *                 example: Blog 1
 *    404:
 *     description: Not Found

 */
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
