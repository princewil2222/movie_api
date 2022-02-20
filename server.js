const express = require('express');
const dotenv = require('dotenv')
const path = require('path')

dotenv.config('.env')






const app = express();

app.use(express.static(path.join(__dirname, 'public'))),

app.set('view engine', 'ejs');


app.get('/airing', (req, res) => {
    res.render('pages/airing');
 })
 app.get('/popular', (req, res) => {
    res.render('pages/popular');
 })
 app.get('/onair', (req, res) => {
    res.render('pages/onair');
 })


const PORT = process.env.PORT||2000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));