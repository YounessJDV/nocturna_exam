// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send('Accès refusé');

  try {
    const verified = jwt.verify(token, 'secret_key');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Token invalide');
  }
};

module.exports = authenticateToken;