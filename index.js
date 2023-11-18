let victories = 65
let defeats = 0

function calculator(a, b) {
    return a - b
}

function calculateRank(x) {
    let rank

    if (x < 10) {
        rank = "Ferro"
    }
    else if (x >= 11 && x < 20) {
        rank = "Bronze"
    }
    else if (x >= 21 && x < 50) {
        rank = "Prata"
    }
    else if (x >= 51 && x < 80) {
        rank = "Ouro"
    }
    else if (x >= 81 && x < 90) {
        rank = "Diamante"
    }
    else if (x >= 91 && x < 100) {
        rank = "Lendário"
    }
    else if (x >= 100) {
        rank = "Imortal"
    }
    else {
        rank = "Indefinido"
    }
    return rank
}

let totalVictories = calculator(victories, defeats)
let ranked = calculateRank(totalVictories)

console.log("O herói tem saldo de " + totalVictories + " está no nível " + ranked)