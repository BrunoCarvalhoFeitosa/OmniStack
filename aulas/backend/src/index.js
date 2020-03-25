//Modules to require express, cors, routes and listen a port to exexute backend
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);