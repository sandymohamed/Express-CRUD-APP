const express = require('express')
const router = express.Router()

const PostModel = require('../models/postSchema')


router.get('/' , async(req, res) => {
    //populate('author', 'selected fields  -not selected')
    //populate('author', 'firstName lastName  -dob')

   await PostModel.find({}).populate('author').exec((err, posts) => {
        (!err)? res.json(posts) : res.status(500).json(err.message)
    })
})


router.get('/:id', async(req, res) => {

await PostModel.find({_id: req.params.id}).populate('author').exec((err, posts)=>{
    (!err) ? res.json(posts) : res.status(500).json(err.message)
})

})


router.post('/', async(req, res) => {
   await PostModel.create(req.body, (err, post) => {
        (!err) ? res.json(post) : res.status(500).json(err.message)
    })
})

router.delete('/:id', async(req, res)=>{
    await PostModel.deleteOne({ _id: req.params.id }, (err, post) => {
        (!err) ? res.json(post) : res.status(500).json(err.message)
    })

})

module.exports={
    postsRouter : router
}