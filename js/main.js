let currentDay = new Date().toLocaleDateString('pt-br')

const submit = document.getElementById('submit')

submit.onclick = function () {

    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')

    const novaData = new Date(year.value, month.value, day.value).toLocaleDateString('pt-br')


    const result = (currentDay - novaData)

    console.log(result)
}

// FALTA:
// - fazer a conversar das datas para numero
// - subtrair as datas
// - apresentar o resultado na tela
// - fazer as validacoes necessarias 