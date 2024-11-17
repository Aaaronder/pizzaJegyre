const backendurl = "http://localhost:3000/futar";

document.addEventListener("DOMContentLoaded", function () {
  const updateButton = document.getElementById("updateButton");

  updateButton.addEventListener("click", async function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const nev = document.getElementById("nev").value;

    const json = { fnev: nev };

    try {
      const response = await fetch(`${backendurl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });

      if (response.ok) {
        console.log("Sikeres módosítás.");
        document.getElementById("id").value = "";
        document.getElementById("nev").value = "";
      } else {
        const error = await response.json();
        alert("Hiba: " + (error.error || "Ismeretlen hiba történt."));
      }
    } catch (error) {
      console.error("Hálózati hiba:", error);
      alert("Nem sikerült kapcsolódni a szerverhez.");
    }
  });
});
