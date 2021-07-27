window.addEventListener('load', HandlePlan)
const content = document.querySelector('.plan-type')

function HandlePlan() {
    if (localStorage.planos) {
        let text = localStorage.planos.toString()
        createLine(text)
    } else {
        setTimeout(() => {
            window.location.assign('../index.html')
        }, 500)
    }
    handlesubmit()
}

function createLine(text) {
    let line = document.createElement("p")
    let textline = document.createTextNode("Plano" + text)
    line.appendChild(textline)
    content.appendChild(line);
}
// ESSE APPEND CHILD ADCIONA O ULTIMO COMO FILHO DO PRIMEIRO DIGITADO
function handlesubmit() {
    const form = document.forms.checkout
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        alert('Sua compra esta sendo processada!')
    })
}