const key = 'Hpabx6qRquhyWI2aNTxFrnorRAEwrA22ByIr7iOn'

async function fetchHistoricalRates(currencies, date) {
    const responce = await fetch(`https://api.currencyapi.com/v3/historical?apikey=${key}&currencies=${currencies}&date=${date}&base_currency=BYN`)
    const data = await responce.json()
    return data
}

export { fetchHistoricalRates }