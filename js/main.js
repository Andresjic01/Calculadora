const input = document.getElementById("valor");
const boton = document.getElementById("boton");
const parrafo = document.getElementById("parra");
const hr = document.getElementById("hr");
const resultado = document.getElementById("resultado");
const ingresado = document.getElementById("ingresado");

function formatNumber(number) {
    return number.toLocaleString('de-DE');
}

function Calcular() {
    const valorinput = input.value.replace(/\./g, '');
    const final = valorinput * 4 / 1000;
    if (valorinput === "") {
        hr.classList.add("resultado");
        parrafo.classList.add("resultado");
        console.log(valorinput);
    } else {
        hr.classList.remove("resultado");
        parrafo.classList.remove("resultado");
        resultado.innerHTML = final.toLocaleString('de-DE');
        ingresado.innerHTML = "$ " + parseFloat(valorinput).toLocaleString('de-DE') + " es: ";
        console.log(final.toLocaleString('de-DE'));
    }
}

function formatInput() {
    let valorinput = input.value.replace(/\./g, '');
    input.value = formatNumber(parseFloat(valorinput));

}
input.addEventListener('input', formatInput);
boton.addEventListener("click", Calcular)