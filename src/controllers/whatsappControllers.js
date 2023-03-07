const { response } = require("express");
const fs = require("fs");
const { getTextUser } = require("../helpers/getTextUser");
const { process } = require("../shared/processMessage");

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
        console.log('Iniciando .....');
        const entry = (req.body["entry"])[0];
        const changes = (entry["changes"])[0];
        const value = changes["value"];
        const messageObject = value["messages"];
        
        console.log(`el Objeto Message es ${messageObject}`);

        if (messageObject) {
            const messages = messageObject[0];
            const number = messages["from"];
            let text = getTextUser(messages);
            
            process(text, number);
        }

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