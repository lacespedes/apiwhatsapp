const { response } = require("express");

const VerifyToken = (req, res = response) => {
    try {
        const accessToken = process.env.TOKEN;
        const token = req.query["hub.verify-tken"];
        const challenge = req.query["hub.challenge"];

        if (!challenge || !token || token !== accessToken) {
            res.status(400).send();
        }

        res.send(challenge);
    } catch (error) {
        res.status(400).send()
    }
}

const ReceiveMessage = (req, res = response) => {
    res.send("ReceiveMessage");
}

module.exports = {
    VerifyToken,
    ReceiveMessage
}