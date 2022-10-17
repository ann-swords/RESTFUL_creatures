const express = require('express')
const router = express.Router()

//filesystem core module
const fs = require('fs')

router.get('/',(req,res)=>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs);
    // console.log(dinoData)
    res.render('dinosaurs/index', {myDinos: dinoData})
    
})

router.get('/new', (req,res)=>{
    res.render('dinosaurs/new')
})

// anything with column should be down, cause it will be confused when it comes to index
router.get('/:idx', (req,res)=>{
    //get dinosaurs
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // console.log(dinoData)
    // console.log('This is the req.params object! ',req.params)
    let dinoIndex = parseInt(req.params.idx)
    // console.log(dinoIndex)
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]});

})

router.post('/',(req, res)=>{
    console.log('This is the Request Body: ', req.body)
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs) //convert it into js object
    //req.body comes from the form.
    dinoData.push(req.body)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs')
})

module.exports = router