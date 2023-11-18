let victories = 200
let defeats = 0

function calculator(x, y) {
    return x - y
}

let rank
let result = calculator(victories, defeats)

if (result < 10) {
    rank = "Ferro"
}
else if (result >= 11 && result < 20) {
    rank = "Bronze"
}
else if (result >= 21 && result < 50) {
    rank = "Prata"
}
else if (result >= 51 && result < 80) {
    rank = "Ouro"
}
else if (result >= 81 && result < 90) {
    rank = "Diamante"
}
else if (result >= 91 && result < 100) {
    rank = "Lendário"
}
else if (result >= 100) {
    rank = "Imortal"
}
else {
    rank = "Indefinido"
}

console.log("O herói tem saldo de " + result + " está no nível " + rank)