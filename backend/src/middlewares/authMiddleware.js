const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message: "Unauthorized"});
    }
    const token = authHeader.split(' ')[1];
    console.log(token);
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;

        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"}); 
    }
}

module.exports = authMiddleware;