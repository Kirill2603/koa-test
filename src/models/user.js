const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String}
}, {collection: 'users', })

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
