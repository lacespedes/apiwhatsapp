
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

const getTextInteractiveObject = (interactiveObject) => {
    const text = "";
    const typeInteractive = interactiveObject["type"];
    
    switch (typeInteractive) {
        case "button_reply":
            text = (interactiveObject["button_reply"])["title"];
            break;
        case "list_reply":
            text = (interactiveObject["list_reply"])["title"];
            break;
                
        default:
            console.log(typeInteractive);
            break;
    }
    return text;
}

module.exports = {
    getTextUser
}