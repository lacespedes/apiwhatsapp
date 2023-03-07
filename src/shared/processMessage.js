const { sendMessageWhatsApp } = require("../services/whatsappService");
const { messageText } = require("./whatsappModel");

const process = (textUser, number) => {
    textUser = textUser.toLowerCase();
    console.log(textUser);
    const models = [] 
    let mensaje = ""

    if (textUser.includes("hola")) {
        mensaje = "Hola, un gusto saludarte";
        console.log("Saludo - ", mensaje);
    } else if (textUser.includes("gracias")) {
        mensaje = "Gracias a ti por escribirme";
        console.log("Agradecimiento - ", mensaje);
    } else if ( textUser.includes("adios") || 
                textUser.includes("adiós") ||
                textUser.includes("bye")   ||
                textUser.includes("me voy") ) {
        mensaje = "Ve con cuidado";
        console.log("Despedida - ", mensaje);
    } else {
        mensaje = "No entiendo lo que dices"
        console.log("Perdido - ", mensaje);
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