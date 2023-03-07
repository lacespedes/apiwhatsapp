const sampleText = (textResponse, number) => {
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
    return data;
}

const sampleImage = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "image",
        "image": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        }
    });
    return data;
}

const sampleAudio = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "audio",
        "audio": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    });
    return data;
}

const sampleVideo = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "video",
        "video": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }
    });
    return data;
}

const sampleDocument = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "document",
        "document": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        }
    });
    return data;
}

const sampleButtons = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Confirmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "btnSi",
                            "title": "✔Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "btnNo",
                            "title": "❌No"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

const sampleList = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "OPCIONES"
            },
            "body": {
                "text": "✔ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tu productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atencion",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia"
                            },
                            {
                                "id": "main-contactos",
                                "title": "Centro de contacto",
                                "description": "Te atendera uno de nuestros agentes"
                            }
                        ]
                    }
                ]
            }
        }
    });
    
    return data;
}

const sampleLocation = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "6.18151803837102",
            "longitude": "-75.64688928172316",
            "name": "Casa de Leonardo",
            "address": "Calle 42 Sur #65A-170 Casa 230"
        }
    });
    return data;
}

module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButtons,
    sampleList,
    sampleLocation
}