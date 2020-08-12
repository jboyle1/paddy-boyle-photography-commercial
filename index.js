const express = require('express');
const app = express();
const path = require('path');
// const exphbs = require('express-handlebars');
// const fs = require('fs');

// Middleware
app.use(express.static(path.join(__dirname, 'libs/css')));
app.use(express.static(path.join(__dirname, 'libs/img')));

// Handlebars templates
app.engine('.hbs', exphbs({extname: 'hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// Routes
app.get('/', (req, res) => res.render('index', context));

// Server listener
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));