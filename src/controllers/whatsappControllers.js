const { response } = require("express");

const VerifyToken = (req, res = response) => {
    res.send("verifyToken");
}

const ReceiveMessage = (req, res = response) => {
    res.send("ReceiveMessage");
}

module.exports = {
    VerifyToken,
    ReceiveMessage
}