function calcularRank(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  function calcularNivel(rank) {
    if (rank <= 10) return "Ferro"
    else if (rank >= 11 && rank <= 20) return "Bronze"
    else if (rank >= 21 && rank <= 50) return "Prata"
    else if (rank >= 51 && rank <= 80) return "Ouro"
    else if (rank >= 81 && rank <= 90) return "Diamante"
    else if (rank >= 91 && rank <= 100) return "Lendário"
    else return "Imortal"
  }
  
  let vitorias = 200;
  let derrotas = 50;
  
  let rank = calcularRank(vitorias, derrotas);
  let nivel = calcularNivel(rank);
  
  console.log(`O Herói tem de saldo de ${rank} está no nível de ${nivel}`);