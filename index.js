function calcularRanke(vitoria, derrota) {
    let saldoVitorias = vitoria - derrota;
    let nivel = rankearJogador(saldoVitorias);
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`);
}

function rankearJogador(saldoVitorias) {
    let nivel;
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {clearInterval
        nivel = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Bronze";
    } else {
        nivel = "Imortal";
    }
    return nivel;
}

for (let vitoria = 10; vitoria < 110; vitoria += 10) {
    for (let derrota = 0; derrota < 100; derrota += 8) {
        calcularRanke(vitoria, derrota);       
    }
}
