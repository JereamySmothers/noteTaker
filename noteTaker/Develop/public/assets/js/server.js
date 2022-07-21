// npm package and local dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// initializing express
const app = express();
const PORT = process.env.PORT || 3001;

