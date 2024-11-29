function toggleMenu() {
    var menu = document.getElementById("sidebarMenu");
    var content = document.getElementById("mainContent"); 
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("visible");    
        content.classList.add("shifted")
    } else {
        menu.classList.remove("visible");
        menu.classList.add("hidden")
        content.classList.remove("shifted")
    }
}




function toggleAccordion() {
    var content = document.getElementById("accordionContent");
    var icon = document.getElementById("accordionIcon");

    if (content.classList.contains("accordion-hidden")) {
        content.classList.remove("accordion-hidden");
        content.classList.add("accordion-visible");
        icon.classList.add("open")
    } else {
        content.classList.remove("accordion-visible");
        content.classList.add("accordion-hidden");
        icon.classList.remove("open")
    }
}

const gmailDoSite = "baobaoreceitas@gmail.com"

document.getElementById("gmail").addEventListener("click", function() {
    var input = document.createElement("input");
    input.value = gmailDoSite;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("Gmail copiado: " + gmailDoSite);

    
})


function toggleLogin() {
    var perfil = document.getElementById("perfil");
    var login = document.getElementById("login");
    if (login.classList.contains("login-hidden")) {
        login.classList.remove("login-hidden")
        login.classList.add("login-visible")
    } else {
        login.classList.remove("login-visible")
        login.classList.add("login-hidden")
    }
}