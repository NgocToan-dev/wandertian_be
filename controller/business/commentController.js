import express from "express";
import CommentService from "../../service/commentService.js";

const router = express.Router();

// Get comment of post
router.get("/:post_id", (req, res) => {
  const post_id = req.params.post_id;
  const commentService = new CommentService();
  commentService.getCommentOfPost(post_id).then((result) => {
    res.send(result);
  });
});

// get replies of comment
router.get("/:comment_id/replies", (req, res) => {
  const comment_id = req.params.comment_id;
  const commentService = new CommentService();
  commentService.getRepliesOfComment(comment_id).then((result) => {
    res.send(result);
  });
});

// save comment of post
router.post("/save", (req, res) => {
  const comment = req.body;
  const commentService = new CommentService();
  commentService.update(comment).then((result) => {
    res.send(result);
  });
});

// Delete comment
router.delete("/:comment_id", (req, res) => {
  const comment_id = req.params.comment_id;
  const commentService = new CommentService();
  commentService.delete(comment_id).then((result) => {
    res.send(result);
  });
});

export default router;
