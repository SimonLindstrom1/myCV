document.getElementById('menuIcon').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
document.querySelector(".logo").addEventListener("click", function() {
    document.body.style.backgroundImage = "url(peter.jpg)"; // Ändra till din bild
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});

document.addEventListener("DOMContentLoaded", function() {
    let typedText = ""; // Sparar vad användaren skriver

    document.addEventListener("keydown", function(event) {
        typedText += event.key.toLowerCase(); // Lägger till varje tangenttryck i strängen

        if (typedText.includes("peter")) {
            showModal(); // Visa modalen när "peter" skrivs
            typedText = ""; // Återställ input
        }

        // Begränsar textlängden så att det inte blir för långt
        if (typedText.length > 5) {
            typedText = typedText.slice(-5);
        }
    });

    function showModal() {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
    }

    document.getElementById("closeModal").addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    });

    // Stänger modalen om man klickar utanför
    window.addEventListener("click", function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});