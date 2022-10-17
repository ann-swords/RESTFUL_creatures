const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')
//Middleware
app.use(ejsLayouts)
app.use(express.urlencoded({extended:false})) //for the request body in the form

//Controllers
app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/prehistoric_creatures', require('./controllers/prehistoric_creatures'))
app.use('/home', require('./controllers/home'))


//Main Route
app.get('/', (req,res) => {
    res.redirect('/home')
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})