const express = require('express')
const router = express.Router()

// displays all prehistoric creatures
router.get('/',(req,res)=>{
    res.render('home')
    
})


module.exports = router