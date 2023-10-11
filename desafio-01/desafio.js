let nome = "Super Programador";
let xpUsuario = 15000;
let nivel;

if (xpUsuario <= 1000) {
  nivel = "Ferro";
}
else if (xpUsuario >= 1001 && xpUsuario <= 2000) {
  nivel = "Bronze";
}
else if (xpUsuario >= 2001 && xpUsuario <= 5000) {
  nivel = "Prata";
}
else if (xpUsuario >= 5001 && xpUsuario <= 7000) {
  nivel = "Ouro";
}
else if (xpUsuario >= 7001 && xpUsuario <= 8000) {
  nivel = "Platina";
}
else if (xpUsuario >= 8001 && xpUsuario <= 9000) {
  nivel = "Ascendente";
}
else if (xpUsuario >= 9001 && xpUsuario <= 10000) {
  nivel = "Imortal";
}
else {
  nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);