const express = require('express')
const router = express.Router()
const UserSchema = require('./User.js')

router.post('/add-user', (req, res) => {
    UserSchema.create(req.body)
        .then(user => {
        console.log('Added a new user!')
        console.log(user)
        res.json(user)
        })
        .catch(err => {
        console.log(req.body.email)
        console.error(err)
        })
})

router.get('/users', (req, res) => {
  UserSchema.find()
  .then(user => {
    console.log("Printing all the users!")
    console.log(user)
    res.json(user)
  })
  .catch(err => {
    console.error(err)
  })
})

router.delete('/id', (req, res) => {
  UserSchema.findByIdAndRemove(req.body.id)
    .then(user => {
      console.log('User is deleted!')
      res.json(user)
    })
    .catch(err => {
        console.error(err)
    })
})

module.exports = router
