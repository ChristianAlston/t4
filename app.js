const express = require('express');
const app = express();
const path = require('path');
const PORT = 7000;



app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/aboutnews', (req, res) => {
    res.render('aboutnews');
})

app.get('/cybersecurity', (req, res) => {
    res.render('cybersecurity');
})

app.get('/employers', (req, res) => {
    res.render('employers');
})

app.get('/hiringguide', (req, res) => {
    res.render('hiringguide');
})

app.get('/jobseekers', (req, res) => {
    res.render('jobseekers');
})

app.get('/proservices', (req, res) => {
    res.render('proservices');
})

app.get('/tappservices', (req, res) => {
    res.render('tappservices');
})

app.get('/tier4security', (req, res) => {
    res.render('tier4security');
})

app.get('/webinars', (req, res) => {
    res.render('webinars');
})



app.listen(PORT, () => {
    console.log(`Port running on port ${PORT}. `);
})