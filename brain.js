/*
 * Guide pour l'élaboration d'un script afin d'implémenter un algorithme de classification avec Brain.js 
 */

const brain = require('brain.js');
// => Cf. https://github.com/BrainJS/brain.js

// Si CSV en local :
// const readline = require('readline');
// const fs = require('fs');
// => Cf. https://nodejs.org/api/readline.html

// Si CSV via une URL :
// const axios = require('axios');
// => Cf. https://github.com/axios/axios/

/**
 * Récupère les données CSV à partir d'un fichier local ou d'une URL (à choisir pour le TP)
 * @param urlOrFilename
 * @returns csvData
 */
function getCsvData(urlOrFilename) {
    // TODO
}

/**
 * Traite les données  CSV pour avoir des données sous forme de tableau JavaScript
 * @param csvData
 * @returns rawData
 */
function parseCsv(csvData) {
    // TODO
}

/**
 * Prépare le jeu de données d'entraînement au format Brain.js
 * @param rawData
 * @returns trainingData
 */
function prepareTrainingData(rawData) {
    // TODO
}


/**
 * Fonction principale du script
 */
function main() {
    // TODO: Appeler getCsvData

    // TODO: Appeler parseCsv

    // TODO: Appeler prepareTrainingData

    // TODO: Créer un NeuralNetwork de Brain.js

    // TODO: Entraîner le modèle (fonction train)

    // TODO : Tester avec le lancement de prédiction (fonction run)
    // Astuce : la fonction run renvoie un tableau typé. Pour obtenir un tableau classique, utiliser la fonction Array.from
}

main();