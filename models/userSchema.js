const mongoose = require('mongoose')
const {PostModel } = require('./postSchema')
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
        minLength: 4,
        maxLength: 22
    },
    email: {
        type: String,
        minLength: 4,
        maxLength: 22,
        unique: true
    },
    dob: Date,
 },

// {
//     methods:{
//      getFullName(cb){
//     console.log(this.firstName + ' ' + this.lastName)
//         }
//     }
// }

)

UserSchema.methods.getFullName = function () {
    const fullName = this.firstName + ' ' + this.lastName;
    console.log("fullname : "+fullName)
    return fullName

}


UserSchema.statics.findUserByFullName = function (fullName, cb) {
    const [firstName, lastName] = fullName.split(' ')
    this.find({firstName: firstName, lastName: lastName}, cb)
}


const UserModel = mongoose.model('user', UserSchema)



   
module.exports = UserModel
