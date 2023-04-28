let currentDay = new Date()

const submit = document.getElementById('submit')

submit.onclick = function () {
    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')

    const userDate = new Date(year.value, month.value, day.value)

    let resultYear = currentDay.getFullYear() - userDate.getFullYear()
    let resultMonth = currentDay.getMonth() - userDate.getMonth()
    let resultDay = currentDay.getDate() - userDate.getDate()

    if (resultDay < 0) {
        let daysInTheLastMonth = getDaysInTheLastMonth(userDate);
        if (daysInTheLastMonth < userDate.getDate()) {
            resultDay = daysInTheLastMonth + resultDay + (userDate.getDate() - daysInTheLastMonth);
        } else {
            resultDay = daysInTheLastMonth + resultDay;
        }
        resultMonth--;
    }
    if (resultMonth < 0) {
        resultMonth = 12 + resultMonth;
        resultYear--;
    }

    function getDaysInTheLastMonth(day) {
        let d = new Date(day);

        let lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);

        return lastDayOfMonth.getDate();
    }

    document.getElementById('result-year').innerHTML = resultYear + " "
    document.getElementById('result-month').innerHTML = resultMonth + " "
    document.getElementById('result-day').innerHTML = resultDay + " "
}









// FALTA:
// - fazer a conversar das datas para numero - ok
// - subtrair as datas - ok
// - apresentar o resultado0 na tela ok
// - fazer as validacoes necessarias 