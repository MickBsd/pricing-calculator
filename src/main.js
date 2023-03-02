import animateTitle from './features/animateTitle';
import createBadge from './features/createBasge';
import './styles/style.css';

console.log('Welcome to Vite + JS + Webflow!');

createBadge();
animateTitle();

const souscription = 199;
const souscriptionAdditional = 129;
let numberOfTickets = 400;
let numberOfTickets2 = 5001;
let nbAdditionalLangage = 0;
let nbAdditionalLangage2 = 0;

let ticketsPrice = [2.45, 2.25, 2.15, 2.05];
let ticketsPriceSpanish = [2.25, 2.15, 2.05, 1.95];
let ticketsPrice2 = [2.45, 2.3];
let ticketsPriceSpanish2 = [2.3, 2.15];

let radioSpain = false;
let radioSpain2 = false;
let currentPrice = 0;
let currentPrice2 = 0;
const resultDisplay = document.querySelector('#result');
const resultDisplay2 = document.querySelector('#result2');
const currencyPound = document.querySelector('#currency-pound');
const currencyPound2 = document.querySelector('#currency-pound2');
const currencyEuro = document.querySelector('#currency-euro');
const currencyEuro2 = document.querySelector('#currency-euro2');
const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const radios = document.querySelectorAll("input[name='radio-calculator']");
const checkboxs = document.querySelectorAll("input[type='checkbox']");
const fieldCheckboxs = document.querySelectorAll(
  '.checkbox_add-language-field'
);
const divRadios = document.querySelectorAll('.radio_language');
const divCheckboxs = document.querySelectorAll('.check_add-language-mask');

initCalculator();
tab1.addEventListener('click', initCalculator);
tab2.addEventListener('click', initCalculator);

let rangeInput = document.querySelector('#range-input');
rangeInput.addEventListener('input', function () {
  numberOfTickets = rangeInput.value;
  if (radioSpain) {
    calculate(ticketsPriceSpanish, nbAdditionalLangage);
  } else {
    calculate(ticketsPrice, nbAdditionalLangage);
  }
});

let rangeInput2 = document.querySelector('#range-input2');
rangeInput2.addEventListener('input', function () {
  numberOfTickets2 = rangeInput2.value;
  if (radioSpain2) {
    calculate2(ticketsPriceSpanish2, nbAdditionalLangage2);
  } else {
    calculate2(ticketsPrice2, nbAdditionalLangage2);
  }
});

radios.forEach((radio) => {
  radio.addEventListener('click', function (e) {
    if (e.target.value === 'French') {
      uncheckAllCheckboxs();
      calculate(ticketsPrice, nbAdditionalLangage);
      calculate2(ticketsPrice2, nbAdditionalLangage2);
      setPointerEventsCheckboxs(fieldCheckboxs[0], fieldCheckboxs[4]);
      toggleActiveClass(divRadios[0], divRadios[4]);
      setBackground(divCheckboxs[0], divCheckboxs[4]);
      setRadioSpain(false);
      currencyDisplay('€');
    } else if (e.target.value === 'English') {
      uncheckAllCheckboxs();
      calculate(ticketsPrice, nbAdditionalLangage);
      calculate2(ticketsPrice2, nbAdditionalLangage2);
      setRadioSpain(false);
      currencyPound.textContent = '£';
      currencyEuro.textContent = '';
      currencyPound2.textContent = '£';
      currencyEuro2.textContent = '';
      setPointerEventsCheckboxs(fieldCheckboxs[1], fieldCheckboxs[5]);
      toggleActiveClass(divRadios[1], divRadios[5]);
      setBackground(divCheckboxs[1], divCheckboxs[5]);
    } else if (e.target.value === 'German') {
      uncheckAllCheckboxs();
      calculate(ticketsPrice, nbAdditionalLangage);
      calculate2(ticketsPrice2, nbAdditionalLangage2);
      setRadioSpain(false);
      currencyDisplay('€');
      setPointerEventsCheckboxs(fieldCheckboxs[2], fieldCheckboxs[6]);
      toggleActiveClass(divRadios[2], divRadios[6]);
      setBackground(divCheckboxs[2], divCheckboxs[6]);
    } else if (e.target.value === 'Spanish') {
      uncheckAllCheckboxs();
      calculate(ticketsPriceSpanish, nbAdditionalLangage);
      calculate2(ticketsPriceSpanish2, nbAdditionalLangage2);
      setRadioSpain(true);
      currencyDisplay('€');
      setPointerEventsCheckboxs(fieldCheckboxs[3], fieldCheckboxs[7]);
      toggleActiveClass(divRadios[3], divRadios[7]);
      setBackground(divCheckboxs[3], divCheckboxs[7]);
    }
  });
});

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('click', function (e) {
    addOrRemoveAdditionalLanguage(e, 'Checkbox-calculator-French');
    addOrRemoveAdditionalLanguage2(e, 'Checkbox-calculator-French2');
    addOrRemoveAdditionalLanguage(e, 'Checkbox-calculator-English');
    addOrRemoveAdditionalLanguage2(e, 'Checkbox-calculator-English2');
    addOrRemoveAdditionalLanguage(e, 'Checkbox-calculator-German');
    addOrRemoveAdditionalLanguage2(e, 'Checkbox-calculator-German2');
    addOrRemoveAdditionalLanguage(e, 'Checkbox-calculator-Spanish');
    addOrRemoveAdditionalLanguage2(e, 'Checkbox-calculator-Spanish2');
  });
});

function initCalculator() {
  radios[0].click();
  radios[4].click();
  fieldCheckboxs[0].style.pointerEvents = 'none';
  fieldCheckboxs[4].style.pointerEvents = 'none';
  divCheckboxs[0].style.backgroundColor = '#fdb0aa';
  divCheckboxs[4].style.backgroundColor = '#fdb0aa';
  currentPrice = souscription + numberOfTickets * ticketsPrice[0];
  currentPrice2 = souscription + numberOfTickets2 * ticketsPrice2[0];
  resultDisplay.textContent = currentPrice;
  resultDisplay2.textContent = currentPrice2;
}

function calculate(ticketsPricing, nbAdditionalLangage) {
  if (numberOfTickets < 1501) {
    currentPrice =
      souscription +
      numberOfTickets * ticketsPricing[0] +
      souscriptionAdditional * nbAdditionalLangage;
    currentPrice = parseFloat(currentPrice.toFixed(2));
  } else if (numberOfTickets < 5001) {
    currentPrice =
      souscription +
      numberOfTickets * ticketsPricing[1] +
      souscriptionAdditional * nbAdditionalLangage;
    currentPrice = parseFloat(currentPrice.toFixed(2));
  } else if (numberOfTickets < 10001) {
    currentPrice =
      souscription +
      numberOfTickets * ticketsPricing[2] +
      souscriptionAdditional * nbAdditionalLangage;
    currentPrice = parseFloat(currentPrice.toFixed(2));
  } else if (numberOfTickets > 10001) {
    currentPrice =
      souscription +
      numberOfTickets * ticketsPricing[3] +
      souscriptionAdditional * nbAdditionalLangage;
    currentPrice = parseFloat(currentPrice.toFixed(2));
  }
  return (resultDisplay.textContent = currentPrice);
}

function calculate2(ticketsPricing, nbAdditionalLangage) {

  if (numberOfTickets2 > 5000) {
    currentPrice2 =
      souscription +
      numberOfTickets2 * ticketsPricing[0] +
      souscriptionAdditional * nbAdditionalLangage;
    currentPrice2 = parseFloat(currentPrice2.toFixed(2));
  } if (numberOfTickets2 > 10000) {
    currentPrice2 =
      souscription +
      numberOfTickets2 * ticketsPricing[1] +
      souscriptionAdditional * nbAdditionalLangage;
    currentPrice2 = parseFloat(currentPrice2.toFixed(2));
  }
  return (resultDisplay2.textContent = currentPrice2);
}

function uncheckAllCheckboxs() {
  for (let i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      checkboxs[i].click();
    }
  }
}

function setRadioSpain(bool) {
  radioSpain = bool;
  radioSpain2 = bool;
}

function currencyDisplay(currency) {
  currencyPound.textContent = '';
  currencyEuro.textContent = currency;
  currencyPound2.textContent = '';
  currencyEuro2.textContent = currency;
}

function setPointerEventsCheckboxs(fieldCheckboxs1, fieldCheckboxs2) {
  fieldCheckboxs.forEach((checkbox) => {
    checkbox.style.pointerEvents = 'auto';
  });
  fieldCheckboxs1.style.pointerEvents = 'none';
  fieldCheckboxs2.style.pointerEvents = 'none';
}

function toggleActiveClass(divRadios1, divRadios2) {
  divRadios.forEach((div) => {
    div.classList.remove('is-active');
  });
  divRadios1.classList.add('is-active');
  divRadios2.classList.add('is-active');
}

function setBackground(divCheckboxs1, divCheckboxs2) {
  divCheckboxs.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
  divCheckboxs1.style.backgroundColor = '#fdb0aa';
  divCheckboxs2.style.backgroundColor = '#fdb0aa';
}

function addOrRemoveAdditionalLanguage(e, targetName) {
  if (e.target.checked && e.target.name === targetName) {
    currentPrice = currentPrice + souscriptionAdditional;
    nbAdditionalLangage = nbAdditionalLangage + 1;
    resultDisplay.textContent = currentPrice;
  } else if (!e.target.checked && e.target.name === targetName) {
    currentPrice = currentPrice - souscriptionAdditional;
    nbAdditionalLangage = nbAdditionalLangage - 1;
    resultDisplay.textContent = currentPrice;
  }
}

function addOrRemoveAdditionalLanguage2(e, targetName) {
  if (e.target.checked && e.target.name === targetName) {
    currentPrice2 = currentPrice2 + souscriptionAdditional;
    nbAdditionalLangage2 = nbAdditionalLangage2 + 1;
    resultDisplay2.textContent = currentPrice2;
  } else if (!e.target.checked && e.target.name === targetName) {
    currentPrice2 = currentPrice2 - souscriptionAdditional;
    nbAdditionalLangage2 = nbAdditionalLangage2 - 1;
    resultDisplay2.textContent = currentPrice2;
  }
}