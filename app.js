fetch('https://covid19.mathdro.id/api')
    .then((response) => {
        return response.json()
 })
    .then((data) => {
        console.log(data)
        document.getElementById('card1').innerHTML = data.confirmed.value
        document.getElementById('card2').innerHTML = data.deaths.value
        document.getElementById('card3').innerHTML = data.recovered.value
    })
    .catch()


document.getElementById('button').addEventListener('click', () => {
    console.log('button is clicked')
    let val = document.getElementById('search').value
    fetch('https://covid19.mathdro.id/api/countries/' + val)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            document.getElementById('card1').innerHTML = data.confirmed.value
            document.getElementById('card2').innerHTML = data.deaths.value
            document.getElementById('card3').innerHTML = data.recovered.value
            document.getElementById('country_name').innerHTML = `<div style="color: white; font-size: 100%; font-weight: bold;">${val.toUpperCase()} :</div>`
            document.getElementById('search').value=''
        })
        .catch()
})

