const pg = require("../configs/db");
const bcrypt = require("bcrypt");

async function getUserByEmail(email) {
    const data = await pg.query(`SELECT * FROM tb_administrator WHERE email = $1;`, [email]);
    return data.rows[0];
}

async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = { getUserByEmail, comparePasswords };
