const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders)
    return res.status(401).send({mesage: 'Token não encontrado!'});
  

  const parts = authHeaders.split(' ');

  if (!parts.length == 2)
    return res.status(401).send({message: 'Token error!'})

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({message: 'Token mal formatado!'})

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({message: 'Token inválido!'})

    req.userId = decoded.id;
    return next();
  })
}