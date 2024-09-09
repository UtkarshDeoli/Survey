const app = require('./app');
require('dotenv').config();
const connectDatabase = require('./src/config/database');

const PORT = process.env.PORT || 6969;

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});