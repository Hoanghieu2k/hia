const express = require('express')
const app = express()
const cors = require('cors')




//handler formdata
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
//dont follow data sharing via api
app.use(cors())

//connect to db


//path use photo
app.use('/uploads', express.static('uploads'))

//route init


//test payment
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.get('/tour', (req, res) => res.render('index'));
app.get('/', (req,res) =>{
    res.send('<h1>hihi</h1>')
})

app.listen(5000, () => {
    console.log(`ON PORT: 5000`)
})
