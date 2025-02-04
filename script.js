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

//Gestion menu burger
// Fermer le menu quand on clique sur un lien
// Ouvrir / Fermer le menu burger
// Fermer le menu burger après un clic sur un lien
// Activer et desactiver le mode sombre
// Événements pour le mode sombre


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll("#mobile-menu a");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const darkModeToggleMobile = document.getElementById("dark-mode-toggle-mobile");

    // Ouvrir / Fermer le menu burger
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Fermer le menu burger après un clic sur un lien
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
        });
    });

    // Fonction pour basculer le mode sombre et fermer le menu burger
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }

    function toggleDarkModeAndCloseMenu() {
        toggleDarkMode();
        mobileMenu.classList.add("hidden"); // Fermer le menu burger
    }

    // Événements pour le mode sombre
    darkModeToggle.addEventListener("click", toggleDarkMode);
    darkModeToggleMobile.addEventListener("click", toggleDarkModeAndCloseMenu);
});

/*
document.addEventListener("DOMContentLoaded", function () {
    const toggleTextBtn = document.getElementById("toggle-text");
    const moreText = document.getElementById("more-text");

    toggleTextBtn.addEventListener("click", function () {
        if (moreText.classList.contains("hidden")) {
            moreText.classList.remove("hidden");
            toggleTextBtn.textContent = "Voir moins";
        } else {
            moreText.classList.add("hidden");
            toggleTextBtn.textContent = "Voir plus";
        }
    });
});

*/

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(function (project) {
        const toggleTextBtn = project.querySelector(".toggle-text");
        const moreText = project.querySelector(".more-text");
        const githubLink = project.querySelector(".github-link");

        toggleTextBtn.addEventListener("click", function () {
            if (moreText.classList.contains("hidden")) {
                moreText.classList.remove("hidden");
                toggleTextBtn.textContent = "Voir moins";
                githubLink.classList.remove("hidden"); // Afficher le bouton "En savoir plus..."
            } else {
                moreText.classList.add("hidden");
                toggleTextBtn.textContent = "Voir plus";
                githubLink.classList.add("hidden"); // Cacher le bouton "En savoir plus..."
            }
        });
    });
});


/*
document.addEventListener("DOMContentLoaded", function () {
    const toggleTextBtn = document.getElementById("toggle-text");
    const moreText = document.getElementById("more-text");
    const githubLink = document.getElementById("github-link");

    toggleTextBtn.addEventListener("click", function () {
        if (moreText.classList.contains("hidden")) {
            moreText.classList.remove("hidden");
            toggleTextBtn.textContent = "Voir moins";
            githubLink.classList.remove("hidden"); // Afficher le bouton "En savoir plus..."
        } else {
            moreText.classList.add("hidden");
            toggleTextBtn.textContent = "Voir plus";
            githubLink.classList.add("hidden"); // Cacher le bouton "En savoir plus..."
        }
    });
});*/






/*
<!-- 



                                <!-- Projet 1 -->
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                    <img src="images/zone-composant.jpg" alt="Projet 1" class="rounded-lg">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mt-4">Système intelligent de tri des déchets ménagers</h3>
                    
                    <p id="text-project" class="text-gray-600 dark:text-gray-300 text-justify">
                        Ce projet vise à développer un système intelligent capable de trier automatiquement les déchets en utilisant un 
                        modèle de classification d’image. 
                        <span id="more-text" class="hidden">
                        Le système est équipé d’une caméra et utilise un modèle de machine learning 
                        pour identifier et trier les déchets en différentes catégories.
                        </span>
                    </p>
                    
                    <!-- Boutons Voir plus / Voir moins -->
                    <button id="toggle-text" class="text-blue-500 hover:underline mt-2">Voir plus</button>

                    <!-- Bouton En savoir plus (Lien GitHub), initialement caché -->
                    <a id="github-link" href="https://github.com/ton-repo/projet-tri-dechets" 
                    class="hidden block text-center border border-blue-500 text-blue-500 px-4 py-2 rounded-lg mt-4 w-fit ml-auto hover:bg-blue-500 hover:text-white transition">
                    En savoir plus...
                    </a>
                </div>



    
                <!-- Projet 2 -->
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                    <img src="images/hands-typing-keyboard-top-view.jpg" alt="Projet 2" class="rounded-lg">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mt-4">Projet 2</h3>
                    <p class="text-gray-600 dark:text-gray-300">Description rapide du projet.</p>
                    <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">Voir plus</a>
                </div>
    
            <!-- Projet 3 -->
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                    <img src="images/pj3.jpg" alt="Projet 3" class="rounded-lg">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mt-4">Projet 3</h3>
                    <p class="text-gray-600 dark:text-gray-300">Description rapide du projet.</p>
                    <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">Voir plus</a>
                </div>

            -->*/