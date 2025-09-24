
let titulo = document.getElementById("titulo");
let textEntrada = document.querySelector("#entrada");
let lista = document.querySelector("#lista");

function atualizarContagem() {
    let itensConcluidos = document.querySelectorAll("#lista .concluida").length;
    let totalItens = document.querySelectorAll("#lista li").length;
    let itensPendentes = totalItens - itensConcluidos;

    contadorConcluido.innerHTML = "Itens comprados: " + itensConcluidos;
    contadorPendente.innerHTML = "Itens pendentes: " + itensPendentes;
}



document.getElementById("btnAdicionar").addEventListener("click", function () {
    console.log("Cliquei");
    if (textEntrada.value.trim() !== "") {
        let li = document.createElement("li");
        li.classList.add("pendente");
        li.innerText = textEntrada.value;

        li.addEventListener("click", function () {
         atualizarContagem();    li.classList.toggle("concluida")
           
        })

        let botaoRemover = document.createElement("span");
        botaoRemover.innerHTML = "X";
        botaoRemover.classList.add("btnRemover");
        botaoRemover.addEventListener("click", (event) => {
            event.stopPropagation();
            li.remove();
        })
        li.appendChild(botaoRemover);
        lista.appendChild(li);
        textEntrada.value = "";
        atualizarContagem();
    } else if (textEntrada.value.trim() === "") {
        alert("Por favor, digite um item!")
    }
})

document.getElementById("btnLimpar").addEventListener("click", function () {
    lista.innerHTML = "";
    atualizarContagem();
})

let contadorConcluido = document.getElementById("comprado");
let contadorPendente = document.getElementById("pendente");
