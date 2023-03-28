const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
     //ref: The model that populate() should use if populating this path.
     author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel 