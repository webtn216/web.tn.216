// INITIALISATION EMAILJS
(function(){
    emailjs.init("U6XUds41UMnCztuId");
})();

// FORMULAIRE
const form = document.getElementById("contact-form");
const success = document.getElementById("success-message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
        from_name: this.from_name.value.trim(),
        from_email: this.from_email.value.trim(),
        message: this.message.value.trim()
    };

    if(!data.from_name || !data.from_email || !data.message){
        alert("Merci de remplir tous les champs !");
        return;
    }

    emailjs.send("service_duukjfk","template_lpwpftg", data)
    .then(function(response){
        console.log("Email envoyé !", response);
        success.style.opacity = "1";
        success.classList.add("check-animate");

        setTimeout(()=>{
            success.style.opacity = "0";
            success.classList.remove("check-animate");
        }, 3000);

        form.reset();
    })
    .catch(function(error){
        console.log("Erreur d'envoi :", error);
        alert("Erreur d'envoi. Vérifie Gmail autorisé ou connexion internet.");
    });
});

// SCROLL REVEAL
window.addEventListener("scroll", function(){
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });

    const sponsor = document.querySelector(".sponsor-grid");
    if(sponsor && sponsor.getBoundingClientRect().top < window.innerHeight - 100){
        sponsor.style.opacity = "1";
        sponsor.style.transform = "translateY(0)";
    }
});

// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
toggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
});