var elForm = document.querySelector("#formValute")
var elInput = document.querySelector("#userValute")
var elSelect = document.querySelector("#selectValue")
var elBtn = document.querySelector("#selectBtn")
var elText = document.querySelector("#valute")


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var Inputvalue = elInput.value;
    var Selectvalue = elSelect.value;

    elText.textContent = Inputvalue * Selectvalue

   
})