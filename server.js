const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const Sentry = require('@sentry/node');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Sentry
Sentry.init({dsn: 'yourSentryDSN'});

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi');
requireDir('./src/models');

const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);