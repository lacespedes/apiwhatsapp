const { response } = require("express");
const fs = require("fs");
//const myConsole = new console.Console(fs.createWriteStream("./logs,txt"));

const VerifyToken = (req, res = response) => {
    try {
        const accessToken = process.env.TOKEN;
        const token = req.query["hub.verify_token"];
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
    try {
        const entry = (req.body["entry"])[0];
        const changes = (entry["changes"])[0];
        const value = changes["value"];
        const messageObject = value["messages"];

        //myConsole.log(messageObject);
        console.log(messageObject);

        res.send("EVENT_RECEIVED");
    } catch (error) {
        console.log(error);
        res.send("EVENT_RECEIVED");
    }
}

module.exports = {
    VerifyToken,
    ReceiveMessage
}