import mongoose from 'mongoose'
const { Schema } = mongoose


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  todolists: [{type: Schema.Types.ObjectId}]
}, { collection: 'Users' })

export const User = mongoose.model('User', UserSchema)

