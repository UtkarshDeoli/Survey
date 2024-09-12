const express = require('express');
const cors = require('cors');

const surveyRoutes = require('./src/routes/surveyRoute');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoute');

const app = express();  
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/survey/', surveyRoutes);
app.use('/api/auth/', authRoutes);
app.use('/api/survey', surveyRoutes);
app.use('/api/user', userRoutes );


module.exports = app;