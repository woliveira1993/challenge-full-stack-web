const authModel = require('../models/auth');

exports.authenticateUser = async (req, res) => {

    const { email, password } = req.body;

    try {

        const result = await authModel.authenticateUser(email, password);

        if (result.error) {

            return res.status(400).json({ error: result.error });

        }

        return res.status(200).json({ message: result.message, token: result.token });

    } catch (err) {

        return res.status(500).json({ error: err.message });

    }
};
