// built in packages
const path = require('path');

//npm packages
const express = require('express');
const hbs = require('hbs');



//activate express
const app = express();

//determine port for server
const port = process.env.PORT || 3000;


//create paths for views, partials, and public folder


const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//set up hbs

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//set up static directory public for css, js, etc...

app.use(express.static(publicPath));

//set up pages

app.get('/', (req, res) => {
    res.render('landing.hbs',{
        siteTitle: 'NAYLOR ANTIQUES'
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        siteTitle: 'ABOUT'
    });
})

app.get('/appraisals', (req, res) => {
    res.render('appraisals.hbs',{
        siteTitle: 'Appraisals'
    });
})

app.get('/consultation_and_sales', (req, res) => {
    res.render('consultation_and_sales.hbs',{
        siteTitle: 'Consultation & Sales'
    });
})

app.get('/ideas', (req, res) =>{
    res.render('ideas.hbs',{
        siteTitle: 'ideas'
    })
})



//start server
app.listen(port);