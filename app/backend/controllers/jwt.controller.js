const jwt = require("jsonwebtoken");

const secretKey = "sectretkey";

exports.getToken = (req, res) => {
    const { name } = req.body;
    const token = jwt.sign({ name }, secretKey, { expiresIn: "1h" });
    res.send({ token });
};

exports.verifyToken = (req, res) => {
    const token = req.body.token;

    if (!token) {
        return res.status(400).send({ message: "Token is required" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Invalid token" });
        }

        res.send({ message: "Token is valid", decoded });
    });
};
