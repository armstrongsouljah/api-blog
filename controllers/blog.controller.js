const {Blog} = require('../models/Blog');

exports.fetchPosts = (req, res) => {
    let posts = Blog.fetchAll()
    return res.json({posts})
}

exports.createPost = (req, res) => {
   const {title, author, content} = req.body;
   const blog = new Blog(title, author, content)
   blog.save() //assume it always
   return res.json({posts})
}