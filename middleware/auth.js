const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

module.exports = async function (req, res, next) {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    };

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user;
        const { id } = req.user
        let user = await User.findById(id)

        if (!user.isAdmin) {
            return res.status(401).json({ errors: [{ msg: "User is not authorized" }] });
        }

        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" })
    };
};