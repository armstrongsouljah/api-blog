const {fetchPosts, createPost} = require('../controllers/blog.controller')
const router = require('express').Router()

router.get('/blog', fetchPosts)
router.get('/blog/new', createPost)