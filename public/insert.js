const backendurl = "http://localhost:3000/futar";

document.addEventListener("DOMContentLoaded", function () {

  const createButton = document.getElementById("createButton");

  createButton.addEventListener("click", async function (event) {
    event.preventDefault();

    const nev = document.getElementById("nev").value;

    const json = { fnev: nev };

    console.log(json);

    const response = await fetch(backendurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json),
    });

    if (response.status === 201) {
      console.log("Sikeres adatfelvitel");
      document.getElementById("nev").value = "";
    } else {
      alert("Sikertelen adatfelvitel");
    }
  });
});