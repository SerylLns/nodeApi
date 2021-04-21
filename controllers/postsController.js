const { PostModel } = require("../models/postModel");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getPosts = (req, res) => {
  PostModel.find((err, data) => {
    if (err) res.status(400).json(err);
    else res.status(200).json(data);
  });
};

module.exports.findPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown :" + req.params.id);
  }
  PostModel.findById(req.params.id, (err, data) => {
    if (err) res.status(400).json(err);
    else res.status(200).json(data);
  });
};

module.exports.createPost = (req, res) => {
  const newPost = new PostModel({
    author: req.body.author,
    message: req.body.message,
  });
  newPost.save((err, data) => {
    if (err) res.status(400).json(err);
    else res.status(200).json(data);
  });
};

module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown :" + req.params.id);
  }
  PostModel.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) res.status(400).json(err);
    else res.status(200).json(data);
  });
};

module.exports.updatePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown :" + req.params.id);
  }
  PostModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        author: req.body.author,
        message: req.body.message,
      },
    },
    { new: true },
    (err, data) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(data);
    }
  );
};

