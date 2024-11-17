const backendurl = "http://localhost:3000/futar";

document.addEventListener("DOMContentLoaded", function () {

    const deleteButton = document.getElementById("deleteButton");

    deleteButton.addEventListener("click", async function (event) {
        event.preventDefault();

        const id = document.getElementById("id").value;

        const confirmed = confirm(`Biztos, hogy törölni szeretnéd a futárt az ID-val: ${id}?`);
        
        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(`${backendurl}/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                console.log("Sikeresen töröltük a futárt.");
                document.getElementById("id").value = "";
            } else {
                alert("Hiba történt a törlés során.");
            }
        } catch (error) {
            console.error("Hálózati hiba:", error);
            alert("Nem sikerült kapcsolódni a szerverhez.");
        }
    });
});
