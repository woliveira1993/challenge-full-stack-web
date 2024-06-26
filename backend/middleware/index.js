const jwt = require('jsonwebtoken');

function securityAccess(req, res, next) {

    let token = req.header('Authorization').split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Acesso negado, você nao possui credenciais válidas!' });

    try {

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.email = decoded.email;

        next();

    } catch (error) {

        res.status(401).json({ error: 'Sessão invalida, faça o login novamente!' });
    }
};

module.exports = securityAccess;