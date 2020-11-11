const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.static('css'));
app.use(express.static('images'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.listen(PORT, () => {
    console.log(`Port running on port ${PORT}. `);
})