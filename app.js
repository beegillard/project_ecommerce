require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mountRoutes = require('./routes/routes');
 
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

mountRoutes(app);


app.listen(port, () => {
    console.log(`App running on port ${port}`);
})
 