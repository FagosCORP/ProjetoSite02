window.addEventListener('load', activeToggle)

function activeToggle() {
    let menuToggle = document.querySelector('.menu-toggle-container');
    let menuNav = document.querySelector('.menu');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('actve')
        menuNav.classList.toggle('actve')
    })
    dsabletoggle()
    //    .classList.toggle SE TEM ELE COLOCA SE NAO TEM ELE CRIA
}

function dsabletoggle() {
    let ideias = document.querySelector('#a-ideias')
    let precos = document.querySelector('#a-prices')
    let links = []
    links.push(ideias, precos)
    links.map((element)=>{eventDisable(element)})

}
// funçao qque vai desativar o Toggle actve ///links.map percorre todo array vendo se foi clicado ele vai executart a funçao
//que desabilita o menu
function eventDisable(element) {
    element.addEventListener('click', () => {
        let menuToggle = document.querySelector('.menu-toggle-container');
        let menuNav = document.querySelector('.menu');
        menuToggle.classList.toggle('actve')
        menuNav.classList.toggle('actve')

    })
}

//Ela desativa pegando os item que foram ativados e usando o class.list.toggle dnv