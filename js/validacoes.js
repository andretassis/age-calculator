const form = document.getElementById('submit')
const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')

form.addEventListener('click', (event) => {
    event.preventDefault()

    if (!inputDay.checkValidity() || !inputMonth.checkValidity() | !inputYear.checkValidity()) {
        document.getElementById('result-year').innerHTML = "-- "
        document.getElementById('result-month').innerHTML = "-- "
        document.getElementById('result-day').innerHTML = "-- "
    }

})