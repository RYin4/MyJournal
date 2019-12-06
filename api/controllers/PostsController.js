//dummy database
const post1 = {id: 1, title: 'Post Title 1', body: 'Here is my head'}
const post2 = {id: 2, title: 'Post Title 2', body: 'Here is my body'}
const post3 = {id: 3, title: 'Post Title 3', body: 'Here is my legs'}

const allPosts = [post1, post2, post3]

module.exports = {

    posts : function(req, res) {
        res.send(allPosts)
    },

    create : function(req, res) {
        const title = req.param('title')
        const body = req.param('body')
        const newPosts = {id: 4, title: title, body: body}
        allPosts.push(newPosts)
        res.end() 
    },

    findById : function(req, res) {
        const postId = req.param('postId')
        const filteredPosts = allPosts.filter(p => {return p.id == postId})
        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send('Failed to find post by id: ' + postId)
        }
        res.send(postId)
    }
} 