let nome = "Homem de Ferro" /*nome qualquer para o heroi, coloquei Homem de Ferro apenas como exemplo.*/

let xp = 12000 //apenas um exemplo de teste

let nivel

if(xp < 1000) {         
    nivel = "Ferro"                          
}else if(xp > 1000 && xp <= 2000) {
    nivel = "Bronze"
}else if(xp > 2000 && xp <= 5000) {
    nivel = "Prata"
}else if(xp > 6000 && xp <= 7000) {
    nivel = "Ouro"
}else if(xp > 7000 && xp <= 8000) {
    nivel = "Platina"
}else if(xp > 8000 && xp <= 9000) {
    nivel = "Ascendente"
}else if(xp > 9000 && xp <= 10000) {
    nivel = "Imortal"
}else if(xp >= 10001) {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)

/*em valores como 1000 ou entre 5001 e 6000, o nível será dado como null, pois no próprio texto do desafio
não há menção de nível para esses valores. Apenas segui o texto do desafio. 
Apenas para título de curiosidade, suponho que o desafio certinho seria: 
let nome = "Homem de Ferro"

let xp = 1234

let nivel
                             
if(xp <= 1000) {         
    nivel = "Ferro"                          
}else if(xp > 1000 && xp <= 2000) {
    nivel = "Bronze"
}else if(xp > 2000 && xp <= 5000) {
    nivel = "Prata"
}else if(xp > 5000 && xp <= 7000) {
    nivel = "Ouro"
}else if(xp > 7000 && xp <= 8000) {
    nivel = "Platina"
}else if(xp > 8000 && xp <= 9000) {
    nivel = "Ascendente"
}else if(xp > 9000 && xp <= 10000) {
    nivel = "Imortal"
}else if(xp >= 10001) {
    nivel = "Radiante"
}
                             
console.log("O Herói de nome " + nome + " está no nível de " + nivel)*/
