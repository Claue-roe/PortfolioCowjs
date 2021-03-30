const contentful = require('contentful')

const client = contentful.createClient({
    space: 'lex1q7u3l9xu',
    accessToken: 'sspu0Sw42MmVgjxsJG4---aNdTwtERuUM44Ow-wziEE'
  })
  

// Illustrations
const OeuvresIllu = [];
client.getEntries().then(oeuvres => {
    oeuvres.items.forEach(oeuvre => {
        if(oeuvre.fields.type==="Illus"){
            console.log(oeuvre.fields)
            OeuvresIllu.push({id: oeuvre.fields.id, Oeuvre: oeuvre.fields.oeuvre.fields.file, Vignette: oeuvre.fields.vignette.fields.file })
        }
    })
  });

// Jeux
const OeuvresJeux = [];
client.getEntries().then(oeuvres => {
    oeuvres.items.forEach(oeuvre => {
        if(oeuvre.fields.type==="Jeux"){
            OeuvresJeux.push({id: oeuvre.fields.id, Oeuvre: oeuvre.fields.oeuvre.fields.file, Vignette: oeuvre.fields.vignette.fields.file })
        }
    })
  });

// Live 2D
const OeuvresLive2d = [];
client.getEntries().then(oeuvres => {
    oeuvres.items.forEach(oeuvre => {
        if(oeuvre.fields.type==="live2d"){
            OeuvresLive2d.push({id: oeuvre.fields.id, Oeuvre: oeuvre.fields.oeuvre.fields.file, Vignette: oeuvre.fields.vignette.fields.file })
        }
    })
  });
  export {OeuvresIllu, OeuvresJeux, OeuvresLive2d};
  