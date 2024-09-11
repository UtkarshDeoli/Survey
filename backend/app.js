const express = require('express');
const cors = require('cors');

const surveyRoutes = require('./src/routes/surveyRoute');
const userRoute = require('./src/routes/userRoute');

const app = express();  
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/survey', surveyRoutes);
app.use('/api/user', userRoute );

module.exports = app;