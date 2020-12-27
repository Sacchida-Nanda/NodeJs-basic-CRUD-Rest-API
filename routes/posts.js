const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

// Get all the post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

// Save the post
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });

        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

// Get specific the post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

// Update the post
router.put('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: { title: req.body.title, description: req.body.description }}
        );
        
        res.json(updatePost);
    } catch (err) {
        res.json({message: err});
    }
});

// Delete the post
router.delete('/:postId', async (req, res) => {
    try {
        const removePosts = await Post.remove({_id: req.params.postId});
        res.json(removePosts);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;