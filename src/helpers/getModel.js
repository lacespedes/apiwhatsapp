const { sampleText, sampleImage, sampleAudio, sampleVideo, sampleDocument, sampleButtons, sampleList, sampleLocation } = require("../shared/sampleModels")

const getModel = (type, number, message) => {
    const MODEL = {
        text: () => sampleText(message, number),
        image: () => sampleImage(number),
        audio: () => sampleAudio(number),
        video: () => sampleVideo(number),
        document: () => sampleDocument(number),
        button: () => sampleButtons(number),
        list: () => sampleList(number),
        location: () => sampleLocation(number)
    }
    
    return MODEL[type]
    ? MODEL[type]()
    :  sampleText('No entiendo', number);
}

module.exports = {
    getModel
}