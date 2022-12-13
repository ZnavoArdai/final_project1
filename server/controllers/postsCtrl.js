const Posts = require("../models/postsModel");
const { post } = require("../routes/userRouter");
const { postValidation, updateValidation } = require("../validation/postValid");

const getAllPosts = async (req, res) => {
  let post;
  try {
    post = await Posts.find({});
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
      date: new Date(req.body.date),
      user: req.body.user,
    });

    post = await newPost.save();
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json(post);
};

const getPostById = async (req, res) => {
  let post;

  try {
    post = await Posts.findById(req.params.id);
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return res.status(400).json("post no found");
  }
  return res.status(200).json(post);
};
const updatePost = async (req, res) => {
  const { error } = updateValidation(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  let post;
  try {
    post = await Posts.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      date: new Date(req.body.date),
    });
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(400).json("post not found");
  }
  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  let post;
  try {
    post = await Posts.findByIdAndRemove(req.params.id);
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return res.status(400).json("post not found");
  }

  return res.status(200).json("post deleted");
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost
};
