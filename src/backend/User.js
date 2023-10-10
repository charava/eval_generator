const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const postSchema = require('./Posts.js')


const noteSchema = new Schema({
    title: {
        type: String,
        required: false,
        unique: false
    },
    description: {
        type: String,
        required: false,
        required: false
    }
})

const userSchema = new Schema({
    firstName: {
        type: String,
        required: false,
        unique: false
    },
    lastName: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: false,
        unique: false
    },
    date: {
        type: String,
        required: false,
        required: false
    },
    note: [noteSchema]
});


//temporary creation in code and not on postman
//const TrialUser = mongoose.model('TrialUser', userSchema);
//const smallParent = new TrialUser({ userInfo: [{name: 'Charlotte', email: 'charcharro@gmail.com', username: 'charosa', password: 'bestpas22'}], posts: [{ title: 'helloooo', description: 'this is desc' }, { title: 'asdfas', description: 'this is sfadsgsdesc' }] })
//console.log(smallParent)

module.exports = mongoose.model("User", userSchema);
