// Bouton "Retour en haut"
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Titre JM clique pour "Retour en haut"
const backTopButton = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backTopButton.classList.remove("show");
    } else {
        backTopButton.classList.add("show");
    }
});

backTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Défilement fluide pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animation des sections au scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("opacity-100", "translate-y-0");
        }
    });
});

const textElement = document.querySelector("#home p");
const texts = ["Ingénieur en informatique", "Développeur Web & Mobile", "Freelancer"];
let index = 0;

function changeText() {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 5000); // Change toutes les 2 secondes

// Animation au survol des compétences
const skillIcons = document.querySelectorAll("#skills i");

skillIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.classList.add("scale-125", "transition", "duration-300");
    });
    icon.addEventListener("mouseleave", () => {
        icon.classList.remove("scale-125");
    });
});

// Reinitialisation du formulaire après l'envoie
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Empêcher le rechargement de la page

        const formData = new FormData(form);
        const action = form.getAttribute("action");

        try {
            const response = await fetch(action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" },
            });

            if (response.ok) {
                alert("Message envoyé avec succès !");
                form.reset(); // Réinitialiser le formulaire
            } else {
                alert("Une erreur est survenue, veuillez réessayer.");
            }
        } catch (error) {
            alert("Erreur de connexion. Vérifiez votre connexion Internet.");
        }
    });
});

// Activer et desactiver le mode sombre

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Vérifier si l'utilisateur a déjà activé le mode sombre
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark");

        // Sauvegarder la préférence utilisateur dans le stockage local
        if (body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

// Animation d'apparitions des projets
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll("#projects div");

    function showProjects() {
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add("opacity-100", "translate-y-0");
            }, index * 200);
        });
    }

    window.addEventListener("scroll", function () {
        const section = document.getElementById("projects");
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            showProjects();
        }
    });

    // Initial state
    projects.forEach((project) => {
        project.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-500");
    });
});

// Actualise la signature du site automatiquement en fonction de l'année
document.getElementById("year").textContent = new Date().getFullYear();

//Menu burger

document.getElementById("menu-toggle").addEventListener("click", function () {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.add("hidden");
    });
});





