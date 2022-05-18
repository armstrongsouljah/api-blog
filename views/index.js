const {fetchPosts, createPost, fetchOne, deleteOne, updateOne} = require('../controllers/blog.controller')
const router = require('express').Router()

router.get('/', fetchPosts)
router.post('/new', createPost)
router.get('/post/:id', fetchOne)
router.put('/update/:id', updateOne)
router.delete('/delete/:id', deleteOne)

module.exports = router;