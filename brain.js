const brain = require('brain.js');
// => Cf. https://github.com/BrainJS/brain.js

//TODO INFO:  J'ai passé par le CSV en ligne
// TODO INFO: TP3 Ahmet YILMAZ &&  Jonathan Lopez GOMEZ
//URL :   https://gist.githubusercontent.com/cbouvard/2f334a970cf543a507526bdca7d1cae4/raw/d535262ceea8fe71e4915b682ca01dc5e6d750f1/iris.csv
 

const axios = require('axios');
// => Cf. https://github.com/axios/axios/

/**
 * Récupère les données CSV à partir d'un fichier local ou d'une URL (à choisir pour le TP)
 * @param urlOrFilename
 * @returns csvData
 */
async function getCsvData(urlOrFilename) {
    // TODO
   // return fetch('data.json',)
   const response = await axios.get(urlOrFilename,{responseType:'blob'});
   return response.data;
}

/**
 * Traite les données  CSV pour avoir des données sous forme de tableau JavaScript
 * @param csvData
 * @returns rawData
 */
async function parseCsv(csvData) {
    let dataParsed = csvData.split('\n').slice(1);
    let tab = [];
    dataParsed.forEach(element => {
        let objet=element.split(',');
        switch (objet[4]){
           case 'Setosa':
               objet[4] = [1,0,0];
               break;
            case 'Versicolor':
                objet[4] = [0,1,0];
                break;
            case 'Virginica':
                objet[4] = [0,0,1];
                break; 
        }
        tab.push({input: [parseFloat(objet[0]), parseFloat(objet[1]), parseFloat(objet[2]), parseFloat(objet[3])], output: objet[4]});
    });
    //log("tab", tab);
    return tab;
}

/**
 * Prépare le jeu de données d'entraînement au format Brain.js
 * @param rawData
 * @returns trainingData
 */
async function prepareTrainingData(rawData) {
    this.net = new brain.NeuralNetwork({
        binaryThresh:0.5,
        hiddenLayers:[3,3,2],
        activation: "sigmoid"
    });

    this.net.train(rawData, {
        iterations:1000,
        learningRate:0.3
    });

}

async function runningBrain(selectionnedData) {
    return this.net.run(selectionnedData);
}

/**
 * Fonction principale du script
 */
async function main() {
    const url = "https://gist.githubusercontent.com/cbouvard/2f334a970cf543a507526bdca7d1cae4/raw/d535262ceea8fe71e4915b682ca01dc5e6d750f1/iris.csv";
    
    // TODO: Appeler getCsvData
    let csvData = await getCsvData(url);

    // TODO: Appeler parseCsv
    let dataFormat = await parseCsv(csvData);

    // TODO: Appeler prepareTrainingData
    // TODO: Créer un NeuralNetwork de Brain.js
    // TODO: Entraîner le modèle (fonction train)
    await prepareTrainingData(dataFormat);


    // TODO : Tester avec le lancement de prédiction (fonction run)
    // Astuce : la fonction run renvoie un tableau typé. Pour obtenir un tableau classique, utiliser la fonction Array.from
   let datas = await runningBrain(dataFormat[60].input);
    const resulTraining = Array.from(datas);
    let setosa = resulTraining[0];
    let versicolor = resulTraining[1];
    let virginica = resulTraining[2];
    let maxvalue = Math.max.apply(Math, resulTraining);
    switch (maxvalue){
        case setosa:
           console.log("L'iris selectionné correspond à : "+ setosa +" de la fleur Setosa");
            break;
        case versicolor:
            console.log("L'iris selectionné correspond à : "+ versicolor +" de la fleur Versicolor");
            break;
        case virginica:
            console.log("L'iris selectionné correspond à : "+virginica+" de la fleur Virginica");
            break;
    }
}

main();