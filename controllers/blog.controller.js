const {Blog} = require('../models/Blog');
const {Post} = require('../models/Post');

exports.fetchPosts = async (req, res) => {
    // let posts = Blog.fetchAll()
    let posts = await Post.find({})
    return res.json({posts})
}

exports.createPost = async (req, res) => {
   const {title, author, content} = req.body;
    //    const blog = new Blog(title, author, content)
   const blog = await Post.create({title, author, description: content})
    //    blog.save() //assume it always
   return res.json({ post })
}

exports.fetchOne = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    return res.json({post})
}

exports.deleteOne = async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndRemove(id)
    return res.json({message: "Post deleted successfully"})
}


exports.updateOne = async (req, res) => {
    const data = {...req.body}
    const { id } = req.params
    let post = await Post.findByIdAndUpdate(id, { ...data })
    return res.json({ post })
}