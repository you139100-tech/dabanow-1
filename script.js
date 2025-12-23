// Fonction de recherche (Simulation)
function searchCourses() {
    const keyword = document.getElementById('searchServer').value;
    const city = document.getElementById('citySelect').value;

    if(keyword === "" && city === "") {
        alert("Veuillez entrer un mot-clé ou choisir une ville.");
    } else {
        console.log(`Recherche: ${keyword} à ${city}`);
        // Ici, on pourrait filtrer les cours avec une base de données
        alert(`Recherche lancée pour : "${keyword}" à ${city} (Simulation)`);
    }
}

// Menu Mobile (Optionnel)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Ajouter du CSS pour .nav-active si nécessaire (display: flex)
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "60px";
            nav.style.right = "0";
            nav.style.background = "white";
            nav.style.width = "100%";
            nav.style.textAlign = "center";
            nav.style.padding = "20px";
        }
    });
}