import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
    
}, {
    timestamps: true
})

//timestamps is passed in as a second argument, this is a replacement for created at and updated at fields.

const User = mongoose.model('User', userSchema);

export default User