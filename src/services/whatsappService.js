const https = require("https");

const sendMessageWhatsApp = (textResponse, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": textResponse
        }
    });

    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/105593125813029/messages",
        method: "POST",
        body: data,
        header: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAMwZAWNuY9MBADBvvxeD4ZBvEtDFZCwWwedQVsDbczIczwLhpVPRbWHIE0vrZBmcZBWgNbLwkbESX2DyjZADyyamU4XoO0OWmUBJoJzM1IZBY4kYNpbxpj9IERSKZAWPBEhDfvZBPJADBtWCZAodpUFS3AkQngVgZAdUSrscrCy8eb8p8uZBXQN4w05"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });

        req.on("error", error => {
            console.error(error);
        });

        req.write(data);
        req.end();
    });
}

module.exports = {
    sendMessageWhatsApp
}