const express = require('express')
const router = express.Router()

const UserModel = require('../models/userSchema')


router.get('/', async(req, res)=> {
    await UserModel.find({}, (err, users) => {
        (!err) ? res.json(users) : res.status(500).json(err.message)

    })
})


UserModel.findUserByFullName( 'sandy sawy', (err, users)=> {
    console.log(users)
})
 
router.get('/:id', async(req, res)=> {
    const _id =req.params.id
    const user = await UserModel.findOne({_id}, (err, user) => {
        if(!err){
            user.getFullName()
            res.json(user)
        }else{
            res.status(500).json(err.message)
        }
    })

})
// router.get('/:id', (req, res)=> {
//     UserModel.find({_id: req.params.id}, (err, users) => {
//         (!err) ? res.json(users) : res.status(500).json(err.message)
//     })
// })


router.delete('/', async(req, res)=>{
    await UserModel.deleteMany({ email: null }, (err, post) => {
        (!err) ? res.json(post) : res.status(500).json(err.message)
    })
})

router.post('/', (req, res)=> {
    return new Promise((resolve, reject)=>{

        const data = {
            firstName: req.body.firstName ,
            lastName:  req.body.lastName ,
            email: req.body.email,
            dob:new Date() ,
        }
           const user = new UserModel(data)
           user.save((err, savedUser) => {

            (!err) ? resolve(res.json(savedUser)) : reject(err)
           })
        
    })
 
 
// UserModel.create(req.body, (err, user) => {
//     (!err) ? res.json(user) : res.status(500).json(err.message)
// })

})



module.exports = { usersRouter: router }
