const form = document.querySelector('#submit')
const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')

form.addEventListener('click', (event) => {
    event.preventDefault()

    if (!inputDay.checkValidity() || !inputMonth.checkValidity() | !inputYear.checkValidity()) {
        alert("Dia: entre 1 e 31")
    }
})