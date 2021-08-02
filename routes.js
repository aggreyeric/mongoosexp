const express = require("express");

const router = express.Router();
const posts = require("./Posts");

router.get("/", async (req, res) => {
  const allPost = await posts.find();
  res.send(allPost);
});

router.post("/", async (req, res) => {
  const newPost = new posts({
    title: req.body.title,
    content: req.body.content,
  });
  await newPost.save();

  res.send(newPost);
});
//http://localhost:5000/posts/6107db14d9a4f73baefc64b9
router.get("/:id", async (req, res) => {
  const onePost = await posts.findOne({ _id: req.params.id });
  res.send(onePost);
});





router.patch('/:id', async (req, res) => {
    const onePost = await posts.findOne({ _id: req.params.id });
    onePost.title = req.body.title
    await onePost.save()
    res.send(onePost);

});


router.delete('/:id', async (req, res) => {
    const onePost = await posts.deleteOne({ _id: req.params.id });
    res.send(onePost);

});




module.exports = router;
