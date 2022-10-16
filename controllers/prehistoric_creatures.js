const express = require('express')
const router = express.Router()

//filesystem core module
const fs = require('fs')


// displays all prehistoric creatures
router.get('/',(req,res)=>{
    let dinosaurs = fs.readFileSync('./prehistoric_creatures.json')
    let dinoData = JSON.parse(dinosaurs);
    // console.log(dinoData)
    res.render('prehistoric_creatures/preIndex', {myDinos: dinoData})
    
})

//shows a form for adding a new prehistoric creature
router.get('/new', (req, res) =>{
    res.render('prehistoric_creatures/preNew')

})

//displays the type and photo of a particular prehistoric creature (id = 1)
router.get('/:id', (req, res) =>{
    let dinosaurs = fs.readFileSync('./prehistoric_creatures.json')
    let dinoData = JSON.parse(dinosaurs)
    let dinoIndex = parseInt(req.params.id)
    res.render('prehistoric_creatures/preShow', {myDinos: dinoData[dinoIndex]})
})

router.post('/', (req, res) =>{
    console.log('This is the Request Body: ', req.body)
    res.redirect('/prehistoric_creatures')
})


module.exports = router