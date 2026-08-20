const d = document;

const card1 = d.getElementById("card1");
const card2 = d.getElementById("card2");
const card3 = d.getElementById("card3");

// NO GRACIAS
d.getElementById("noGracias").addEventListener("click", () => {
    card1.style.display = "none";
    card2.style.display = "block";
});

// SI POR FAVOR
d.getElementById("siPorfavor").addEventListener("click", () => {
    card1.style.display = "none";
    card3.style.display = "block";
});

// SI OPORTUNIDAD
d.getElementById("siOportunidad").addEventListener("click", () => {
    card2.style.display = "none";
    card3.style.display = "block";
});


// ==========================
// REGALOS
// ==========================

function mostrarRegalo(numero) {

    // Ocultar card de regalos
    card3.style.display = "none";

    // Ocultar todas las cards
    d.querySelectorAll(".regalo-card").forEach(card => {
        card.style.display = "none";
    });

    // Mostrar el regalo seleccionado
    d.getElementById(`cardRegalo${numero}`).style.display = "block";
}


// BOTONES DE REGALOS

d.getElementById("regalo1").addEventListener("click", () => {
    mostrarRegalo(1);
});

d.getElementById("regalo2").addEventListener("click", () => {
    mostrarRegalo(2);
});

d.getElementById("regalo3").addEventListener("click", () => {
    mostrarRegalo(3);
});

d.getElementById("regalo4").addEventListener("click", () => {
    mostrarRegalo(4);
});

d.getElementById("regalo5").addEventListener("click", () => {
    mostrarRegalo(5);
});


// ==========================
// REGRESAR
// ==========================

d.querySelectorAll(".regresar").forEach(boton => {

    boton.addEventListener("click", () => {

        d.querySelectorAll(".regalo-card").forEach(card => {
            card.style.display = "none";
        });

        card3.style.display = "block";
    });

});