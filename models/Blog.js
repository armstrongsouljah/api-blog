blogPosts = []
class Blog {
    constructor(title, content, author) {
        this.title = title
        this.content = content
        this.author = author
    }

    save() {
        return blogPosts.push(this)
    }
    static fetchAll() {
        return blogPosts
    }
}

exports.Blog = Blog;