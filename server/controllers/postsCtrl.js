const Posts = require("../models/postsModel");
const { post } = require("../routes/userRouter");
const { postValidation } = require("../validation/postValid");

const getAllPosts = async (req, res) => {
  let post;
  try {
    post = await posts.find({});
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return res.status(400).json("post not found");
  }

  if (post.length == 0) {
    return res.status(400).json("pos collection empty");
  }

  return res.status(200).json({ post });
};

const createPost = async (req, res) => {
  const { error } = postValidation(req.body);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  let post;
  try {
    const newPost = new Posts({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      date:new Date( req.body.date),
      user:req.body.user,

    });

    post=await newPost.save()
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json(post)
};

module.exports = {
  getAllPosts,
  createPost,
};
