const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

const bdDeErick = require('./bdDeErick')
const api = require('./api')
const middleware = require('./middleware')

app.listen(8000)

