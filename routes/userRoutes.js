const express = require ('express');
const router = express.Router ();
const User = require ('../models/User');



router.get ('/getBD', (req,res) => {
    User.find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}) ; 


router.post ('/add_user', (req,res) => {
    User.create (req.body)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}) ;


router.put ('/edit_user', (req,res) => {
    User.findByIdAndUpdate ('632af8c8d18f2425da6b437a', {name:'baya'})
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


router.delete('/delete_user', (req,res) => {
    User.findByIdAndDelete('6328e5ffc7b5acff286c0320')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})



module.exports = router 