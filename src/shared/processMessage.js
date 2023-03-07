const { sendMessageWhatsApp } = require("../services/whatsappService");
const { messageText } = require("./whatsappModel");

const process = (textUser, number) => {
    textUser = textUser.toLowerCase();
    const models = [] 
    let mensaje = ""

    if (textUser.includes("hola")) {
        mensaje = "Hola, un gusto saludarte";
    } else if (textUser.includes("gracias")) {
        mensaje = "Gracias a ti por escribirme";
    } else if ( textUser.includes("adios") || 
                textUser.includes("adiós") ||
                textUser.includes("bye")   ||
                textUser.includes("me voy") ) {
        mensaje = "Ve con cuidado";
    } else {
        mensaje = "No entiendo lo que dices"
    }

    const model = messageText(mensaje, number);
    models.push(model);

    models.forEach(model => {
        sendMessageWhatsApp(model);
    });    
}

module.exports = {
    process
}