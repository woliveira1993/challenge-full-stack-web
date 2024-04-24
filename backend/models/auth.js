const pg = require("../configs/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function authenticateUser(email, password) {
    try {

        const user = await pg.query(`SELECT * FROM tb_administrator WHERE email = $1`, [email]);

        if (user.rowCount == 0) {
            return { error: "Email ou Senha inválidas." };
        } 

        const hashedPassword = user.rows[0].password;

        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (passwordMatch) {

            const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
            return { msg: "Sucesso!", token: token };

        } else {

            return { error: "Email ou Senha inválidas." };

        }

    } catch (err) {

        throw err;
    }
}

module.exports = { authenticateUser };
