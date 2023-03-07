const https = require("https");

const sendMessageWhatsApp = (data) => {

    console.log(`El body es : ${data}`);
    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/105593125813029/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AUTH}`
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });
    
    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    sendMessageWhatsApp
}