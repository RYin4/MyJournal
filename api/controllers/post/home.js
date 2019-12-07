module.exports = async function(req, res) {
    console.log('This route shows homepage of post')

    //load from pages.home
    //pass objects to the homepage
    const allPosts = await Post.find()
    res.view('pages/home', 
        {allPosts}
    )
}