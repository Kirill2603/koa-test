import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { collection: 'users' })

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
