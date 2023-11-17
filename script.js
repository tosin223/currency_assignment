const southAfricaRate = async () => {
    const response = await fetch ("https://api.frankfurter.app/latest?from=ZAR")
    const fetchResult = await response.json()
    console.log(fetchResult.rates.USD)
    return (fetchResult.rates.USD)
}
southAfricaRate()
const usdRate = async () => {
    const response = await fetch ("https://api.frankfurter.app/latest?from=USD")
    const fetchResult = await response.json()
    console.log(fetchResult.rates.ZAR)
    return (fetchResult.rates.ZAR)
}
usdRate()
const inputValue = document.querySelector('input[type=text]')
const southAfricaId = document.querySelector("#southZar")
const usdId = document.querySelector("#usaUSD")
southAfricaId.addEventListener('click', async () => {
    let currencyRate = await southAfricaRate()
    const inputValue1 = document.querySelector('input[type=text]')
    const paragraph = document.querySelector('#paragph')
    let conversion = currencyRate * inputValue1.value
    paragraph.textContent = conversion
})
usdId.addEventListener('click', async () => {
    let currencyRate = await usdRate()
    const inputValue = document.querySelector('input[type=text]')
    const paragraph = document.querySelector('#paragph')
    let conversion = currencyRate * inputValue.value
    paragraph.textContent = conversion
})
