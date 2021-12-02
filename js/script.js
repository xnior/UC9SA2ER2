function mostrarMenu() {
    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";

    } else {
        menu.style.display = "flex";

    }
}

function ajustartela() {
    let header = document.getElementById("header-id");

    if (getComputedStyle(header).class != "container cabecalho") {
        header.class = "container-fluid cabecalho";

    } else {
        header.class = "container cabecalho";
    }

}

function cadastrarNewsletter() {
    let emaildigitado = document.getElementById("newsletter-email").value;
    console.log(emaildigitado);
}

function mostrarNoticias() {
    let noticia = document.getElementById("noticias");

}