const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()


app.set('view engine', 'ejs')

//Middleware
app.use(ejsLayouts)
app.use(express.urlencoded({extended:false}))
//Contorllers Middleware
app.use('/dinosaurs', require('./controllers/dinosaurs'))

app.get('/', (req, res)=>{
    res.redirect('/dinosaurs')
})

app.listen(3000, ()=>{
    console.log('App listening on port 3000!')
})