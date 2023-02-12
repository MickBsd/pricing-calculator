


function addOrRemoveAdditionalLanguage(e,targetName) {
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



if (e.target.checked && e.target.name === "Checkbox-calculator-French") {
    currentPrice = currentPrice + souscriptionAdditional;
    nbAdditionalLangage = nbAdditionalLangage + 1;
    resultDisplay.textContent = currentPrice;
} else if (!e.target.checked && e.target.name === "Checkbox-calculator-French") {
    currentPrice = currentPrice - souscriptionAdditional;
    nbAdditionalLangage = nbAdditionalLangage - 1;
    resultDisplay.textContent = currentPrice;
}