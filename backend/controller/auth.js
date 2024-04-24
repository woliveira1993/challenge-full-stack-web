const authModel = require('../models/auth');
const jwt = require("jsonwebtoken");

exports.auth = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authModel.getUserByEmail(email);

        if (!user) {
            return res.status(400).json({ error: "Email ou Senha inválidas." });
        }

        const hashedPassword = user.password;

        if (!hashedPassword) {
            return res.status(400).json({ error: "Email ou Senha inválidas." });
        }

        const passwordMatch = await authModel.comparePasswords(password, hashedPassword);

        if (passwordMatch) {

            const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
            return res.status(200).json({ message: "Sucesso!", token: token });

        } else {

            return res.status(400).json({ error: "Email ou Senha inválidas." });

        }
    } catch (err) {

        return res.status(500).json({ error: "Ocorreu um erro ao realizar o login, entre em contato com o suporte para mais informações." });
        
    }
};
