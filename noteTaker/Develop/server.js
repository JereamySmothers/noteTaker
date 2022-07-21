// npm package and local dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

// initializing express
const app = express();
const PORT = process.env.PORT || 3001;

// express data parsing
app.use(express.urlencoded({ extended: true }));

// express data conversion to json
app.use(express.json());
app.use(express.static(__dirname + '/'));

// api and html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// initiates server response on PORT
app.listen(PORT, (log) => {
    console.log(PORT);
});
