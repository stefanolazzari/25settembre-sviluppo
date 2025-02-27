let i = 0;

while (i < 6) {
    console.log(i);
    i++;
}



let vegetali = ["carciofi", "barbabietole", "zucchine", "finocchi", "carote", "cetrioli", "broccoli"];

for (let index = 0; index < vegetali.length; index++) {
    const element = vegetali[index];

    if (element === "carciofi") {
        console.log("ho trovato dei carciofi");
    } else {
        console.log("non ho trovato carciofi ma " + element);
    }

}



const lista2 = document.getElementById("divRosso");
const bottone2 = document.getElementById("bottone2");

bottone2.addEventListener("click",function(){

    for (let index = 0; index < vegetali.length; index++) {
        const nuovoElemento = document.createElement("li");
        nuovoElemento.textContent = vegetali[index];
        lista2.appendChild(nuovoElemento);
    }

})

