import animateTitle from './features/animateTitle'
import createBadge from './features/createBasge'
import './styles/style.css'

console.log('Welcome to Vite + JS + Webflow!')

createBadge()
animateTitle()

const souscription = 199;
const souscriptionAdditional = 129;
let numberOfTickets = 400;
let numberOfTickets2 = 5001;
let nbAdditionalLangage = 0;
let nbAdditionalLangage2 = 0;

let ticketsPrice = [2.45, 2.25, 2.15, 2.05];
let ticketsPriceSpanish = [2.25,2.15,2.05,1.95];
let ticketsPrice2 = [2.45, 2.30];
let ticketsPriceSpanish2 = [2.30, 2.15];

let radioSpain = false;
let radioSpain2 = false;
let sumSpanishTickets = 0;
let sumSpanishTickets2 = 0;
let sumTickets = 0;
let sumTickets2 = 0;
let difference = 0;
let difference2 = 0;
let currentPrice = 0;
let currentPrice2 = 0;
const resultDisplay = document.querySelector('#result');
const resultDisplay2 = document.querySelector('#result2');
const currencyPound = document.querySelector("#currency-pound");
const currencyPound2 = document.querySelector("#currency-pound2");
const currencyEuro = document.querySelector("#currency-euro");
const currencyEuro2 = document.querySelector("#currency-euro2");
const spanishTickets = document.querySelector("#spanish-tickets");
const spanishTickets2 = document.querySelector("#spanish-tickets2");
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const radios = document.querySelectorAll("input[name='radio-calculator']");
const checkboxs = document.querySelectorAll("input[type='checkbox']");
const fieldCheckboxs = document.querySelectorAll(".checkbox_add-language-field");
const divRadios = document.querySelectorAll(".radio_language");
const divCheckboxs = document.querySelectorAll(".check_add-language-mask");

initCalculator();
tab1.addEventListener("click", initCalculator);
tab2.addEventListener("click", initCalculator);

//Ajout d'un listener sur chaque bouton radio afin de calculer le prix total en fonction de la langue choisie.
radios.forEach((radio) => { radio.addEventListener("click", function(e) {
        if (e.target.value === "French" && e.target.checked === true) {
            calculate(ticketsPrice, nbAdditionalLangage);  
            calculate2(ticketsPrice2, nbAdditionalLangage2);
            radioSpain = false;
            radioSpain2 = false;
            currencyPound.textContent = "";
            currencyEuro.textContent = "€";
            currencyPound2.textContent = "";
            currencyEuro2.textContent = "€";
            fieldCheckboxs.forEach((checkbox) => { checkbox.style.pointerEvents = "auto" });
            fieldCheckboxs[0].style.pointerEvents = "none";
            fieldCheckboxs[4].style.pointerEvents = "none";
            uncheckAllCheckboxs();
            divRadios.forEach((div) => { div.classList.remove("is-active") });
            divRadios[0].classList.add("is-active");
            divRadios[4].classList.add("is-active");
            divCheckboxs.forEach((div) => { div.style.backgroundColor = "white" });
            divCheckboxs[0].style.backgroundColor = "#fdb0aa";
            divCheckboxs[4].style.backgroundColor = "#fdb0aa";
        } else if (e.target.value === "English" && e.target.checked === true) {
            calculate(ticketsPrice, nbAdditionalLangage);
            calculate2(ticketsPrice2, nbAdditionalLangage2);
            radioSpain = false;
            radioSpain2 = false;
            currencyPound.textContent = "£";
            currencyEuro.textContent = "";
            currencyPound2.textContent = "£";
            currencyEuro2.textContent = "";
            fieldCheckboxs.forEach((checkbox) => { checkbox.style.pointerEvents = "auto" })
            fieldCheckboxs[1].style.pointerEvents = "none";
            fieldCheckboxs[5].style.pointerEvents = "none";
            uncheckAllCheckboxs();
            divRadios.forEach((div) => { div.classList.remove("is-active") });
            divRadios[1].classList.add("is-active");
            divRadios[5].classList.add("is-active");
            divCheckboxs.forEach((div) => { div.style.backgroundColor = "white" });
            divCheckboxs[1].style.backgroundColor = "#fdb0aa";   
            divCheckboxs[5].style.backgroundColor = "#fdb0aa";       
        } else if (e.target.value === "German" && e.target.checked === true) {
            calculate(ticketsPrice, nbAdditionalLangage);
            calculate2(ticketsPrice2, nbAdditionalLangage2);
            radioSpain = false;
            radioSpain2 = false;
            currencyPound.textContent = "";
            currencyEuro.textContent = "€";
            currencyPound2.textContent = "";
            currencyEuro2.textContent = "€";
            fieldCheckboxs.forEach((checkbox) => { checkbox.style.pointerEvents = "auto" })
            fieldCheckboxs[2].style.pointerEvents = "none";
            fieldCheckboxs[6].style.pointerEvents = "none";
            uncheckAllCheckboxs();
            divRadios.forEach((div) => { div.classList.remove("is-active") });
            divRadios[2].classList.add("is-active");
            divRadios[6].classList.add("is-active");
            divCheckboxs.forEach((div) => { div.style.backgroundColor = "white" });
            divCheckboxs[2].style.backgroundColor = "#fdb0aa";
            divCheckboxs[6].style.backgroundColor = "#fdb0aa";
        } else if (e.target.value === "Spanish" && e.target.checked === true) {
            console.log(e.target.value);
            console.log(e.target.checked);
            calculate(ticketsPriceSpanish, nbAdditionalLangage);
            calculate2(ticketsPriceSpanish2, nbAdditionalLangage2);
            radioSpain = true;
            radioSpain2 = true;
            currencyPound.textContent = "";
            currencyEuro.textContent = "€";
            currencyPound2.textContent = "";
            currencyEuro2.textContent = "€";
            fieldCheckboxs.forEach((checkbox) => { checkbox.style.pointerEvents = "auto" })
            fieldCheckboxs[3].style.pointerEvents = "none"
            fieldCheckboxs[7].style.pointerEvents = "none"
            uncheckAllCheckboxs();
            divRadios.forEach((div) => { div.classList.remove("is-active") });
            divRadios[3].classList.add("is-active");
            divRadios[7].classList.add("is-active");
            divCheckboxs.forEach((div) => { div.style.backgroundColor = "white" });
            divCheckboxs[3].style.backgroundColor = "#fdb0aa";
            divCheckboxs[7].style.backgroundColor = "#fdb0aa";
        }
    })
});

// TAB1 : Ajout d'un listener afin de calculer le prix total en fonction du nombre de tickets choisis.
let rangeInput = document.querySelector('#range-input');
console.log(rangeInput);
rangeInput.addEventListener("input", function() {
    console.log(rangeInput.value);
    numberOfTickets = rangeInput.value;  
    if (radioSpain === true) {
        calculate(ticketsPriceSpanish, nbAdditionalLangage);
    } else {
        calculate(ticketsPrice, nbAdditionalLangage);
    }
});

// TAB2 : Ajout d'un listener afin de calculer le prix total en fonction du nombre de tickets choisis.
let rangeInput2 = document.querySelector('#range-input2');
console.log(rangeInput2);
rangeInput2.addEventListener("input", function() {
    console.log(rangeInput2.value);
    numberOfTickets2 = rangeInput2.value;  
    console.log(radioSpain);
    if (radioSpain2 === true) {
        calculate2(ticketsPriceSpanish2, nbAdditionalLangage2);
    } else {
        calculate2(ticketsPrice2, nbAdditionalLangage2);
    }
});

//Récupération des checkbox afin de savoir si une langue additionelle est choisie ou non.
checkboxs.forEach((checkbox) => { checkbox.addEventListener("click", function(e) {
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-French") {
        currentPrice = currentPrice + souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage + 1;
        resultDisplay.textContent = currentPrice;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-French") {
        currentPrice = currentPrice - souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage - 1;
        resultDisplay.textContent = currentPrice;
    }
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-French2") {
        currentPrice2 = currentPrice2 + souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 + 1;
        resultDisplay2.textContent = currentPrice2;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-French2") {
        currentPrice2 = currentPrice2 - souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 - 1;
        resultDisplay2.textContent = currentPrice2;
    }
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-English") {
        currentPrice = currentPrice + souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage + 1;
        resultDisplay.textContent = currentPrice;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-English") {
        currentPrice = currentPrice - souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage - 1;
        resultDisplay.textContent = currentPrice;
    }
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-English2") {
        currentPrice2 = currentPrice2 + souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 + 1;
        resultDisplay2.textContent = currentPrice2;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-English2") {
        currentPrice2 = currentPrice2 - souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 - 1;
        resultDisplay2.textContent = currentPrice2;
    }
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-German") {
        currentPrice = currentPrice + souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage + 1;
        resultDisplay.textContent = currentPrice;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-German") {
        currentPrice = currentPrice - souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage - 1;
        resultDisplay.textContent = currentPrice;
    }
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-German2") {
        currentPrice2 = currentPrice2 + souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 + 1;
        resultDisplay2.textContent = currentPrice2;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-German2") {
        currentPrice2 = currentPrice2 - souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 - 1;
        resultDisplay2.textContent = currentPrice2;
    }
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-Spanish") {
        spanishTickets.style.display = "block";
        currentPrice = currentPrice + souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage + 1;
        resultDisplay.textContent = currentPrice;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-Spanish") {
        spanishTickets.style.display = "none";
        currentPrice = currentPrice - souscriptionAdditional;
        nbAdditionalLangage = nbAdditionalLangage - 1;
        spanishTickets.value = "";
        difference = 0;
        resultDisplay.textContent = currentPrice;
    }  
    if (e.target.checked === true && e.target.name === "Checkbox-calculator-Spanish2") {
        spanishTickets2.style.display = "block";
        currentPrice2 = currentPrice2 + souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 + 1;
        resultDisplay2.textContent = currentPrice2;
    } else if (e.target.checked === false && e.target.name === "Checkbox-calculator-Spanish2") {
        spanishTickets2.style.display = "none";
        currentPrice2 = currentPrice2 - souscriptionAdditional;
        nbAdditionalLangage2 = nbAdditionalLangage2 - 1;
        spanishTickets2.value = "";
        difference2 = 0;
        resultDisplay2.textContent = currentPrice2;
    }    
  })
});

spanishTickets.addEventListener("input", function() {
    if (spanishTickets.value > numberOfTickets) {
        spanishTickets.value = numberOfTickets;
    }
    if (spanishTickets.value < 1501) {
        sumSpanishTickets = spanishTickets.value * ticketsPriceSpanish[0];
        sumSpanishTickets = parseFloat(sumSpanishTickets.toFixed(2));
        sumTickets = spanishTickets.value * ticketsPrice[0];
        sumTickets = parseFloat(sumTickets.toFixed(2));
    } else if (spanishTickets.value < 5001) {
        sumSpanishTickets = spanishTickets.value * ticketsPriceSpanish[1];
        sumSpanishTickets = parseFloat(sumSpanishTickets.toFixed(2));
        sumTickets = spanishTickets.value * ticketsPrice[1];
        sumTickets = parseFloat(sumTickets.toFixed(2));
    } else if (spanishTickets.value < 10001) {
        sumSpanishTickets = spanishTickets.value * ticketsPriceSpanish[2];
        sumSpanishTickets = parseFloat(sumSpanishTickets.toFixed(2));
        sumTickets = spanishTickets.value * ticketsPrice[2];
        sumTickets = parseFloat(sumTickets.toFixed(2));
    } else if (spanishTickets.value > 10001) {
        sumSpanishTickets = spanishTickets.value * ticketsPriceSpanish[3]; 
        sumSpanishTickets = parseFloat(sumSpanishTickets.toFixed(2));
        sumTickets = spanishTickets.value * ticketsPrice[3];
        sumTickets = parseFloat(sumTickets.toFixed(2));
    }
    difference =  sumTickets - sumSpanishTickets;
    difference = parseFloat(difference.toFixed(2));
    let result = currentPrice - difference;
    result = parseFloat(result.toFixed(2));
    resultDisplay.textContent = result;
});

spanishTickets2.addEventListener("input", function() {
    if (spanishTickets2.value > numberOfTickets2) {
        spanishTickets2.value = numberOfTickets2;
    }
    if (spanishTickets2.value < 10001) {
        sumSpanishTickets2 = spanishTickets2.value * ticketsPriceSpanish2[0];
        sumSpanishTickets2 = parseFloat(sumSpanishTickets2.toFixed(2));
        sumTickets2 = spanishTickets2.value * ticketsPrice2[0];
        sumTickets2 = parseFloat(sumTickets2.toFixed(2));
    } else if (spanishTickets2.value > 10001) {
        sumSpanishTickets2 = spanishTickets2.value * ticketsPriceSpanish2[1];
        sumSpanishTickets2 = parseFloat(sumSpanishTickets2.toFixed(2));
        sumTickets2 = spanishTickets2.value * ticketsPrice2[1];
        sumTickets2 = parseFloat(sumTickets2.toFixed(2));
    }
        difference2 = sumTickets2 - sumSpanishTickets2;
        difference2 = parseFloat(difference2.toFixed(2));
        let result2 = currentPrice2 - difference2;
        result2 = parseFloat(result2.toFixed(2));
        resultDisplay2.textContent = result2;
});

function initCalculator(){
    radios[0].click();
    radios[4].click();
    fieldCheckboxs[0].style.pointerEvents = "none";
    fieldCheckboxs[4].style.pointerEvents = "none";
    divCheckboxs[0].style.backgroundColor = "#fdb0aa";
    divCheckboxs[4].style.backgroundColor = "#fdb0aa";
    currentPrice = souscription + numberOfTickets * ticketsPrice[0];
    currentPrice2 = souscription + numberOfTickets2 * ticketsPrice2[0];
    resultDisplay.textContent = currentPrice;
    resultDisplay2.textContent = currentPrice2;
}

// TAB 1 : Fonction permettant le calcul du prix en fonction du nombre de tickets et de la langue dans la tab1.
function calculate(ticketsPricing, nbAdditionalLangage) {
    if (numberOfTickets < 1501) {
        currentPrice = souscription + (numberOfTickets * ticketsPricing[0]) + souscriptionAdditional * nbAdditionalLangage;
        currentPrice = parseFloat(currentPrice.toFixed(2));
    } else if (numberOfTickets < 5001) {
        currentPrice = souscription + (numberOfTickets * ticketsPricing[1]) + souscriptionAdditional * nbAdditionalLangage;
        currentPrice = parseFloat(currentPrice.toFixed(2));
    } else if (numberOfTickets < 10001) {
        currentPrice = souscription + (numberOfTickets * ticketsPricing[2]) + souscriptionAdditional * nbAdditionalLangage;
        currentPrice = parseFloat(currentPrice.toFixed(2));
    } else if (numberOfTickets > 10001) {
        currentPrice = souscription + (numberOfTickets * ticketsPricing[3]) + souscriptionAdditional * nbAdditionalLangage;
        currentPrice = parseFloat(currentPrice.toFixed(2));
    }
    return resultDisplay.textContent = currentPrice;
}

// TAB 2 : Fonction permettant le calcul du prix en fonction du nombre de tickets et de la langue dans la tab2.
function calculate2(ticketsPricing, nbAdditionalLangage) {
    if (numberOfTickets2 > 5000) {
        currentPrice2 = souscription + (numberOfTickets2 * ticketsPricing[0]) + souscriptionAdditional * nbAdditionalLangage;
        currentPrice2 = parseFloat(currentPrice2.toFixed(2));
    } else if (numberOfTickets2 > 10001) {
        currentPrice2 = souscription + (numberOfTickets2 * ticketsPricing[1]) + souscriptionAdditional * nbAdditionalLangage;
        currentPrice2 = parseFloat(currentPrice2.toFixed(2));
    }
    return resultDisplay2.textContent = currentPrice2;
}

function uncheckAllCheckboxs(){
    for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) {
            fieldCheckboxs[i].click();
        }
    }
}