// Cotação de moedas
const USD = 5.34
const GBP = 4.98
const EUR = 5.97
const JPY = 0.038
const MXN = 0.29
const CNH = 0.77
const NOK = 0.55
const SGD = 4.27

// Inicialização das variáveis 
const form = document.querySelector("form")
const btn = document.querySelector("button")
let moneyValue = document.querySelector("#amount")
let currency = document.querySelector("#currency")
const footer = document.querySelector("footer")
let convertDescription = document.querySelector("#description")
let convertResult = document.querySelector("#result")
let reverseConvert = document.querySelector("#reversecurrency")

window.onload = load
moneyValue.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g // Configuraçã para procurar um padrão de letra 
    moneyValue.value = moneyValue.value.replace(hasCharactersRegex, "") // Atualiza o valor do moneyValue trocando o padrão achado por nada, no caso se acionar letras substitui por nada
    
    if(moneyValue.value === ""){
        load()
    }
})

form.onsubmit = (e) => {
    e.preventDefault() // Desativa a ação padrão de submit
    switch(currency.value){
        case "USD":
            convertCurrency(moneyValue.value, USD, "$", "Dólares")
            break
        case "GBP":
            convertCurrency(moneyValue.value, GBP, "₤", "Libras")
            break
        case "EUR":
            convertCurrency(moneyValue.value, EUR, "€", "Euros")
            break
        case "JPY":
            convertCurrency(moneyValue.value, JPY, "¥", "Ienes")
            break
        case "MXN":
            convertCurrency(moneyValue.value, MXN, "M$", "Pesos")
            break
        case "CNH":
            convertCurrency(moneyValue.value, CNH, "¥", "Yuans")
            break
        case "NOK":
            convertCurrency(moneyValue.value, NOK, "kr", "Coroas")
            break
        case "SGD":
            convertCurrency(moneyValue.value, SGD, "$", "Dólares")
            break
    }
}

// Função para converter a moeda
function convertCurrency(moneyValue, price, symbol, nameCurrency){
    convertDescription.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

    let convert = moneyValue * price
    convertResult.textContent = `${formatCurrencyBRL(convert).replace("R$", "")} Reais`
    
    convertDescription.style.display = "block"

    if(reverseConvert.checked){
        convertDescription.textContent = `R$ 1 = ${formatCurrencyUSD(1/price).replace("$", symbol)}`

        let convert =  moneyValue /price
        convertResult.textContent = `${formatCurrencyUSD(convert).replace("$", "")} ${nameCurrency}`
    }
}

// Modifica o footer quando carrega a página
function load(){
    convertDescription.style.display = "none"
    convertResult.textContent = "Insira valores"
}

// Função para formatar um valor em moeda brasileira
function formatCurrencyBRL(value){
    // Precisa sempre fazer essa conversão em número para poder usar o toLocaleString
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}

function formatCurrencyUSD(value){
    return Number(value).toLocaleString("en-US",{
        style: "currency",
        currency: "USD",
    })
}

