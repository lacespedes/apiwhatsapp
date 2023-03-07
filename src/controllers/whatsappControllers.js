const { response } = require("express");
const fs = require("fs");
const { getModel } = require("../helpers/getModel");
const { getTextUser } = require("../helpers/getTextUser");
const { sendMessageWhatsApp } = require("../services/whatsappService");


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
            console.log(`El type es: ${text}`);
            const model = getModel(text, number, 'Hola Usuario');

            console.log(model); 
            sendMessageWhatsApp(model);     
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