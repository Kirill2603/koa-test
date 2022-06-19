import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { collection: 'Users' })

export const User = mongoose.model('User', UserSchema)

