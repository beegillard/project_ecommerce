require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mountRoutes = require('./routes/routes');
 
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

mountRoutes(app);

app.get('/', (req, res) => {
    res.send("This is the home page");
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
 