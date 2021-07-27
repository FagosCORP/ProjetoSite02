window.addEventListener('load', handlebutton)

function handlebutton() {
    let btnPriv = document.querySelector('#bt-private');
    let btnSoci = document.querySelector('#bt-socie');
    let btnPub = document.querySelector('#bt-public');
    let buttons = []
    buttons.push(btnPriv, btnPub, btnSoci)
    buttons.map((element) => {
        handleHouter(element)

    })
}

function handleHouter(element) {
    element.addEventListener('click', () => {
        window.location.assign('view/checkout.html')
        localStorage.planos=element.value
    })
}