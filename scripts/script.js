// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur

function jouer() {
    let score = 0
    demanderChoixUtilisateur()
    
}

function afficherResultat(score, total) {
    console.log("Votre score est de " + score + " sur " + total)
}

function demanderChoixUtilisateur() {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    lancerBoucle()
    while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}
}

function lancerBoucle() {
    if (choix === "mots") {
        let score = 0
    // On parcourt le tableau des mots
    for (let i = 0; i < listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    afficherResultat(score, listeMots.length)
} else {
    let score = 0
    // On parcourt le tableau des phrases
    for (let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    afficherResultat(score, listePhrases.length)
}
}
