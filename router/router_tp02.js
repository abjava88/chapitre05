const express = require('express')
const User = require('../models/user')

const router = express.Router()

// Getting all users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            console.log(err)
            res.status(500).send({ message: err.message })
        } else{
            res.status(200).send(users)
        }
      })
  })

  module.exports = router