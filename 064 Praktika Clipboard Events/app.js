
//! Praktika

const input = document.querySelector("#txtTaskName");


input.addEventListener("paste", formatData);

function formatData(e) {

    e.preventDefault();

    let digits = e.clipboardData.getData("text").replace(/\D/g, "");

    let formaterData =
        digits.replace(/^(\d{4})(\d{4})(\d{4})(\d{4}.*)/, "$1-$2-$3-$4");

    console.log(formaterData);

    e.target.value = formaterData;

}



















