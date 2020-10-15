const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
// const fs = require('fs');

// Middleware
app.use(express.static(path.join(__dirname, 'public/bootstrap/css')));
app.use(express.static(path.join(__dirname, 'public/bootstrap/fonts')));
app.use(express.static(path.join(__dirname, 'public/bootstrap/js')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/font-awsome/css')));

app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/js/email.js')));
app.use(express.static(path.join(__dirname, 'public/js/handlebars')));
app.use(express.static(path.join(__dirname, 'public/js/main')));
app.use(express.static(path.join(__dirname, 'public/images/index')));
app.use(express.static(path.join(__dirname, 'public/images/about')));
app.use(express.static(path.join(__dirname, 'public/images/favicon')));
app.use(express.static(path.join(__dirname, 'public/images/categories')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/gallery1')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/002')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/003')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/004')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/005')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/006')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/007')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/008')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/009')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/010')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/011')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/gallery2')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/002')));
app.use(express.static(path.join(__dirname, 'public/images/cat-3/gallery3')));




// Handlebars templates
app.engine('.hbs', exphbs({extname: 'hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// Image 0bjects
const context = {
    cat1Gal: [
        {
            img: '3k.jpg',
        },
        {
            img: '4k.jpg',
        },
        {
            img: '5k.jpg',
        },
        {
            img: '6k.jpg',
        },
        {
            img: '7k.jpg',
        },
        {
            img: '8k.jpg',
        },
        {
            img: '9k.jpg',
        },
        {
            img: '10k.jpg',
        },
        {
            img: '11k.jpg',
        },
        {
            img: '12k.jpg',
        },
        {
            img: '13k.jpg',
        },
        {
            img: '14k.jpg',
        },
        {
            img: '15k.jpg',
        },
        {
            img: '16k.jpg',
        },
        {
            img: '17k.jpg',
        },
        {
            img: '18k.jpg',
        },
        {
            img: '19k.jpg',
        },
        {
            img: '20k.jpg',
        },
        {
            img: '21k.jpg',
        },
        {
            img: '22k.jpg',
        },
        {
            img: '23k.jpg',
        },
        {
            img: '24k.jpg',
        },
        {
            img: '25k.jpg',
        },
        {
            img: '26k.jpg',
        },
        {
            img: '27k.jpg',
        },
        {
            img: '28k.jpg',
        },
        {
            img: '29k.jpg',
        },
        {
            img: '30k.jpg',
        },
        {
            img: '31k.jpg',
        },
        {
            img: '32k.jpg',
        },
        {
            img: '33k.jpg',
        },
        {
            img: '34k.jpg',
        },
        {
            img: '35k.jpg',
        },
        {
            img: '36k.jpg',
        },
        {
            img: '37k.jpg',
        },
        {
            img: '38k.jpg',
        },
        {
            img: '39k.jpg',
        },
        {
            img: '40k.jpg',
        }
    ],
    cat1001: [
        {
            img: '3a.jpg',
        },
        {
            img: '4a.jpg',
        },
        {
            img: '5a.jpg',
        },
        {
            img: '6a.jpg',
        },
        {
            img: '7a.jpg',
        },
        {
            img: '8a.jpg',
        },
        {
            img: '9a.jpg',
        },
        {
            img: '10a.jpg',
        },
        {
            img: '11a.jpg',
        },
        {
            img: '12a.jpg',
        },
    ],
    cat1002: [
        {
            img: '3b.jpg',
        },
        {
            img: '4b.jpg',
        },
        {
            img: '5b.jpg',
        },
        {
            img: '6b.jpg',
        },
        {
            img: '7b.jpg',
        },
        {
            img: '8b.jpg',
        },
        {
            img: '9b.jpg',
        },
        {
            img: '10b.jpg',
        },
        {
            img: '11b.jpg',
        },
        {
            img: '12b.jpg',
        },
    ],
    cat1003: [
        {
            img: '3c.jpg',
        },
        {
            img: '4c.jpg',
        },
        {
            img: '5c.jpg',
        },
        {
            img: '6c.jpg',
        },
        {
            img: '7c.jpg',
        },
        {
            img: '8c.jpg',
        },
        {
            img: '9c.jpg',
        },
        {
            img: '10c.jpg',
        },
        {
            img: '11c.jpg',
        },
        {
            img: '12c.jpg',
        },
        {
            img: '13c.jpg',
        }
    ],
    cat1004: [
        {
            img: '3d.jpg',
        },
        {
            img: '4d.jpg',
        },
        {
            img: '5d.jpg',
        },
        {
            img: '6d.jpg',
        },
        {
            img: '7d.jpg',
        },
        {
            img: '8d.jpg',
        },
        {
            img: '9d.jpg',
        },
        {
            img: '10d.jpg',
        },
        {
            img: '11d.jpg',
        },
        {
            img: '12d.jpg',
        }
    ],
    cat1005: [
        {
            img: '3e.jpg',
        },
        {
            img: '4e.jpg',
        },
        {
            img: '5e.jpg',
        },
        {
            img: '6e.jpg',
        },
        {
            img: '7e.jpg',
        },
        {
            img: '8e.jpg',
        },
        {
            img: '9e.jpg',
        },
        {
            img: '10e.jpg',
        },
        {
            img: '11e.jpg',
        },
        {
            img: '12e.jpg',
        },
        {
            img: '13e.jpg',
        },
        {
            img: '14e.jpg',
        },
        {
            img: '15e.jpg',
        },
        {
            img: '16e.jpg',
        }
    ],
    cat1006: [
        {
            img: '3f.jpg',
        },
        {
            img: '4f.jpg',
        },
        {
            img: '5f.jpg',
        },
        {
            img: '6f.jpg',
        },
        {
            img: '7f.jpg',
        },
        {
            img: '8f.jpg',
        },
        {
            img: '9f.jpg',
        },
        {
            img: '10f.jpg',
        },
        {
            img: '11f.jpg',
        },
        {
            img: '12f.jpg',
        },
        {
            img: '13f.jpg',
        },
        {
            img: '14f.jpg',
        },
        {
            img: '15f.jpg',
        },
        {
            img: '16f.jpg',
        }
    ],
    cat1007: [
        {
            img: '3g.jpg',
        },
        {
            img: '4g.jpg',
        },
        {
            img: '5g.jpg',
        },
        {
            img: '6g.jpg',
        },
        {
            img: '7g.jpg',
        },
        {
            img: '8g.jpg',
        },
        {
            img: '9g.jpg',
        },
        {
            img: '10g.jpg',
        },
        {
            img: '11g.jpg',
        }
    ],
    cat1008: [
        {
            img: '3h.jpg',
        },
        {
            img: '4h.jpg',
        },
        {
            img: '5h.jpg',
        },
        {
            img: '6h.jpg',
        },
        {
            img: '7h.jpg',
        },
        {
            img: '8h.jpg',
        },
        {
            img: '9h.jpg',
        },
        {
            img: '10h.jpg',
        },
        {
            img: '11h.jpg',
        },
        {
            img: '12h.jpg',
        },
        {
            img: '13h.jpg',
        }
    ],
    cat1009: [
        {
            img: '3i.jpg',
        },
        {
            img: '4i.jpg',
        },
        {
            img: '5i.jpg',
        },
        {
            img: '6i.jpg',
        },
        {
            img: '7i.jpg',
        },
        {
            img: '8i.jpg',
        },
        {
            img: '9i.jpg',
        },
        {
            img: '10i.jpg',
        },
        {
            img: '11i.jpg',
        },
        {
            img: '12i.jpg',
        },
        {
            img: '13i.jpg',
        },
        {
            img: '14i.jpg',
        },
        {
            img: '15i.jpg',
        }
    ],
    cat1010: [
        {
            img: '3j.jpg',
        },
        {
            img: '4j.jpg',
        },
        {
            img: '5j.jpg',
        },
        {
            img: '6j.jpg',
        },
        {
            img: '7j.jpg',
        },
        {
            img: '8j.jpg',
        },
        {
            img: '9j.pg',
        },
        {
            img: '10j.jpg',
        },
        {
            img: '11j.jpg',
        },
        {
            img: '12j.jpg',
        },
        {
            img: '13j.jpg',
        },
        {
            img: '14j.jpg',
        },
        {
            img: '15j.jpg',
        },
        {
            img: '16j.jpg',
        }
    ],
    cat1011: [
        {
            img: '3l.jpg',
        },
        {
            img: '4l.jpg',
        },
        {
            img: '5l.jpg',
        },
        {
            img: '6l.jpg',
        },
        {
            img: '7l.jpg',
        },
        {
            img: '8l.jpg',
        },
        {
            img: '9l.jpg',
        },
        {
            img: '10l.jpg',
        }
    ],
    cat2Gal: [
        {
            img: '3o.jpg',
        },
        {
            img: '4o.jpg',
        },
        {
            img: '5o.jpg',
        },
        {
            img: '6o.jpg',
        },
        {
            img: '7o.jpg',
        },
        {
            img: '8o.jpg',
        },
        {
            img: '9o.jpg',
        },
        {
            img: '10o.jpg',
        },
        {
            img: '11o.jpg',
        },
        {
            img: '12o.jpg',
        },
        {
            img: '13o.jpg',
        },
        {
            img: '14o.jpg',
        },
        {
            img: '15o.jpg',
        },
        {
            img: '16o.jpg',
        },
        {
            img: '17o.jpg',
        },
        {
            img: '18o.jpg',
        },
        {
            img: '19o.jpg',
        },
        {
            img: '20o.jpg',
        },
        {
            img: '21o.jpg',
        },
        {
            img: '22o.jpg',
        },
        {
            img: '23o.jpg',
        },
        {
            img: '24o.jpg',
        },
        {
            img: '25o.jpg',
        },
        {
            img: '26o.jpg',
        },
        {
            img: '27o.jpg',
        },
        {
            img: '28o.jpg',
        },
        {
            img: '29o.jpg',
        },
        {
            img: '30o.jpg',
        }
    ],
    cat2001: [
        {
            img: '3m.jpg',
        },
        {
            img: '4m.jpg',
        },
        {
            img: '5m.jpg',
        },
        {
            img: '6m.jpg',
        },
        {
            img: '7m.jpg',
        },
        {
            img: '8m.jpg',
        }
    ],
    cat2002: [
        {
            img: '3n.jpg',
        },
        {
            img: '4n.jpg',
        },
        {
            img: '6n.jpg',
        },
        {
            img: '7n.jpg',
        },
        {
            img: '8n.jpg',
        },
        {
            img: '9n.jpg',
        },
        {
            img: '10n.jpg',
        },
        {
            img: '11n.jpg',
        },
        {
            img: '12n.jpg',
        },
        {
            img: '13n.jpg',
        },
        {
            img: '14n.jpg',
        },
        {
            img: '15n.jpg',
        },
        {
            img: '16n.jpg',
        }
    ],
    cat3Gal: [
        {
            img: '3p.jpg',
        },
        {
            img: '4p.jpg',
        },
        {
            img: '5p.jpg',
        },
        {
            img: '6p.jpg',
        },
        {
            img: '7p.jpg',
        },
        {
            img: '8p.jpg',
        },
        {
            img: '9p.jpg',
        },
        {
            img: '10p.jpg',
        },
        {
            img: '11p.jpg',
        },
        {
            img: '12p.jpg',
        },
        {
            img: '13p.jpg',
        },
        {
            img: '14p.jpg',
        },
        {
            img: '15p.jpg',
        },
        {
            img: '16p.jpg',
        },
        {
            img: '17p.jpg',
        },
        {
            img: '18p.jpg',
        },
        {
            img: '19p.jpg',
        },
        {
            img: '20p.jpg',
        },
        {
            img: '21p.jpg',
        },
        {
            img: '22p.jpg',
        },
        {
            img: '23p.jpg',
        },
        {
            img: '24p.jpg',
        },
        {
            img: '25p.jpg',
        },
        {
            img: '26p.jpg',
        },
        {
            img: '27p.jpg',
        },
        {
            img: '28p.jpg',
        },
        {
            img: '29p.jpg',
        },
        {
            img: '30p.jpg',
        }
    ]
}

// Routes
app.get('/', (req, res) => res.render('index', context));
// Category 1
app.get('/cat-1', (req, res) => res.render('cat-1', context));
// Category 2
app.get('/cat-2', (req, res) => res.render('cat-2', context));
// Category 3
app.get('/cat-3', (req, res) => res.render('cat-3', context));
// About
app.get('/about', (req, res) => res.render('about', context));
// Contact
app.get('/about', (req, res) => res.render('about', context));
// Contact
app.get('/contact', (req, res) => res.render('contact', context));

// Server listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));