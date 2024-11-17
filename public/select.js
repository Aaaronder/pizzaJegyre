let backendurl = "http://localhost:3000/futar";

document.addEventListener("DOMContentLoaded",async function () {

const response = await fetch(backendurl);   
const data = await response.json();
console.log(data);
if(data.length > 0) {
    listCards(data);
} else {
    console.log("Nincs megjeleníthető adat");
    const cardContainer = document.getElementById("kartyak");
    cardContainer.innerHTML = "<h2>Nincs megjeleníthető adat</h2>";
}

});

function listCards(data){
    const cardContainer = document.getElementById("kartyak");
    cardContainer.innerHTML = "";
    data.forEach((element) => {
        let card = document.createElement("div");
        card.className = "kartya";
        card.innerHTML = `
            <h4><i>Futár neve</i>: <b>${element.fnev}</b></h4>
            `;
        cardContainer.appendChild(card);}
    );
};