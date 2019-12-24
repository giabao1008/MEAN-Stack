const express = require('express');
// template Engine // npm install ejs
const app = express();
app.set('views', './views');
app.set('view engine','ejs');


// Route home
app.get('/', (req, res) => { 
    res.render('home');
});

app.get('/learn', (rep, res)=> {
    res.render('learn');
} )

app.get('*',(req, res) => { res.send('Not Found');  });

app.listen(3000, () => console.log('Server is running '));