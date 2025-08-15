const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

const bdDeErick = require('./bdDeErick')
const { verificarToken, verificarCargo } = require('./middleware')

require('./api')({ app, bdDeErick, jwt, verificarToken, verificarCargo })

app.listen(8000)

