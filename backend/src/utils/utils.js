const JWT = require('jsonwebtoken');

const generateResetToken = (id, email, expiresIn = '10m') => {
    return JWT.sign({ id, email }, process.env.JWT_SECRET, { expiresIn });
};

module.exports = {
    generateResetToken,
};
