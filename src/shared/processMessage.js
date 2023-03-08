const { sendMessageWhatsApp } = require("../services/whatsappService");
const { messageText, messageList, messageButtons } = require("./whatsappModel");

const process = (textUser, number) => {
    textUser = textUser.toLowerCase();
    console.log(textUser);
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
    } else if (textUser.includes("comprar")) {
        const model = messageButtons(number);
        models.push(model);
    } else if (textUser.includes("vender")) {
        mensaje = "Registrate en https://forms.gle/aX5qxs1UKZJwr8qq5";
    }
    else {
        mensaje = "No entiendo lo que dices"
    }

    if (mensaje.length > 0) {
        const model = messageText(mensaje, number);
        models.push(model);
    }
    
    if (textUser.includes("hola")) {
        const modelist = messageList(number);
        models.push(modelist)
    }

    models.forEach(model => {
        sendMessageWhatsApp(model);
    });    
}

module.exports = {
    process
}