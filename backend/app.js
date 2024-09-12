const express = require('express');
const cors = require('cors');

const surveyRoutes = require('./src/routes/surveyRoute');
const authRoutes = require('./src/routes/authRoutes');
const app = express();  
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/survey/', surveyRoutes);
app.use('/api/auth/', authRoutes);

module.exports = app;