const key = 'Hpabx6qRquhyWI2aNTxFrnorRAEwrA22ByIr7iOn'

$(function () {
    let date = new Date()
    date.setDate(date.getDate() - 1);
    $('input[type="date"]').attr('max', date.toLocaleDateString('en-ca'))
})

async function requestExchangeRates() {
    let $table = $('<table>')
    $table.addClass('table is-striped is-fullwidth is-hoverable')
    $table.append('<caption>')
        .append('<thead>').children('thead')
        .append('<tr/>').children('tr').append('<th>Date</th><th>Currency</th><th>Price</th>');

    $table.children('caption')
        .append('<h1>Exchange Rate</h1>').children('h1')
        .addClass('title')

    let $tbody = $table.append('<tbody />').children('tbody');


    const date = $('input[type="date"]').val()
    if (!date) throw new Error("Date not specified")

    let currencies = ''
    $('input[type="checkbox"]:checked').each(function () {
        currencies += $(this).val() + ','
    })
    if (currencies.length === 0) throw new Error('Currencies not specified')
    currencies = currencies.slice(0, -1);

    const responce = await fetch(`https://api.currencyapi.com/v3/historical?apikey=${key}&currencies=${currencies}&date=${date}&base_currency=BYN`)
    let data = await responce.json()
    data = data.data

    for (let currency in data) {
        let price = 1 / data[currency].value
        $tbody.append('<tr/>').children('tr:last')
            .append(`<td>${date}</td><td>${data[currency].code}</td><td>${price.toFixed(2)}</td>`)
    }

    $('#tableDiv').html($table);
}

window.requestExchangeRates = requestExchangeRates