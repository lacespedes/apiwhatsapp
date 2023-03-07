const { getTextInteractiveObject } = require("./get-text-interactive-object");

const getTextUser = (messages) => {
    let text = "";
    const typeMessage = messages["type"] ;
    switch (typeMessage) {
        case "text":
            text = (messages["text"])
            break;
    
        case "interactive":
            const interactiveObject = messages["interactive"];
            text = getTextInteractiveObject(interactiveObject);
            break;    

        default:
            console.log(typeMessage);
            break;
    }
    return text;
}

module.exports = {
    getTextUser
}