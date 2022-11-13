const mongoose = require('mongoose');

const username = "admin";
const password = "admin";
const database = "ServiPlusBD";
const URI = "mongodb+srv://"+ username + ":" + password + "@juanvicluster.qrxfpac.mongodb.net/" + database + "?retryWrites=true&w=majority";
// const URI = "mongodb+srv://" + username + ":" + password + "@cluster0.xv4doci.mongodb.net/" + database + "?retryWrites=true&w=majority";

const conectar = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas está en línea");
    } catch (error) {
        console.log("Error de conexión " + error);
    }

    /*
    mongoose.connect(URI)
        .then(()=>{ console.log("Atlas está en línea"); })
        .catch(()=>{ console.log("Error de conexión " + error); })*/
}

conectar();

module.exports = mongoose;