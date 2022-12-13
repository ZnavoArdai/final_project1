const Posts = require("../models/postsModel");
const User = require("../models/userModel");

const mongoose=require("mongoose")

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

  let userExist;
  try {
    userExist=await User.findById(req.body.users)

  } catch (error) {
    console.log(error)
  }
  if(!userExist){
    return res.status(400).json("user not exist");

  }
  

  let post;
  try {
     post = new Posts({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      date: new Date(req.body.date),
      users: req.body.users,
    });

    const session= await mongoose.startSession();
    session.startTransaction();

    userExist.posts.push(post)
    await userExist.save({session})
    post = await post.save({session});
    session.commitTransaction();
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
    const session=await mongoose.startSession();
    session.startTransaction();
    post=await Posts.findById(req.params.id).populate("users");
   post.users.posts.pull(post)
    await post.users.save({session})
    post = await Posts.findByIdAndRemove(req.params.id);
    session.commitTransaction()

  } catch (error) {
    console.log(error);
  }

  // if (!post) {
  //   return res.status(400).json("post not found");
  // }

  return res.status(200).json("post deleted");
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost
};
