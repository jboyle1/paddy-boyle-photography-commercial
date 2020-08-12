const express = require('express');
const app = express();
// const path = require('path');
// const exphbs = require('express-handlebars');
// const fs = require('fs');


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));