/*------ BASE PARA A TORRE DE HANOI ------*/
// selecionando o elemento pattern div#hanoi
const container = document.getElementById('hanoi')

// selecionando o elemento h1
const title = document.querySelector('h1')

// Criando uma div com id de nome stopDisk para armazenar o movimento dos discos
const stopDisk = document.createElement('div')
stopDisk.id = 'stopDisk'

// Criando uma div para armazenar a mensagem de vitoria
const victoryMsg = document.createElement('div')
victoryMsg.id = 'victory'

// Criando o button para dar o reset
const button = document.createElement('button')
button.id = 'reset'
button.innerText = 'Refresh'

// criando as 3 torres e adicionando classes via DOM
const tower1 = document.createElement('div')
tower1.classList.add('tower')

const tower2 = document.createElement('div')
tower2.classList.add('tower')

const tower3 = document.createElement('div')
tower3.classList.add('tower')

// Adicionando as torres no elemento pattern div#hanoi via DOM
container.appendChild(tower1)
container.appendChild(tower2)
container.appendChild(tower3)

// Criando os 4 disco, adicionando classes e nomes via DOM
const disk1 = document.createElement('div')
disk1.classList.add('disk1')

const disk2 = document.createElement('div')
disk2.classList.add('disk2')

const disk3 = document.createElement('div')
disk3.classList.add('disk3')

const disk4 = document.createElement('div')
disk4.classList.add('disk4')

// Adicionando o button na body
document.body.appendChild(button)
document.body.appendChild(victoryMsg)

// Usando 
document.body.prepend(stopDisk)
document.body.prepend(title)

// Adicionando os discos na torre1
tower1.appendChild(disk1)
tower1.appendChild(disk2)
tower1.appendChild(disk3)
tower1.appendChild(disk4)

/*------ MOVIMENTAÇÃO DOS DISCOS ENTRE AS TORRES ------*/
// Adicionando o event listener em cada torre
tower1.addEventListener('click', selectDisk)
tower2.addEventListener('click', selectDisk)
tower3.addEventListener('click', selectDisk)

// Função com a condição para movimentar os disco pelas torres
function selectDisk (event) { // criando função de nome selectDisk com o parametro event
    const e = event.currentTarget // declarando a constante e para receber a torre clicada
    const diskSelect = e.lastElementChild //declando a constante diskSelect para receber o ultimo elemento filho da torre clicada

    if(stopDisk.childElementCount === 1){ // se a quantidade de elementos filhos na div stopDisk for igual a 1, faça ->
        if (e.childElementCount === 0 || stopDisk.firstChild.clientWidth < diskSelect.clientWidth){ //se o elemento filho da torre clicada for igual a 0 OU o tamanho do elemento filho na div stopDisk for menor que o tamando do ultimo elemento filho da torre clicada, faça ->
            e.appendChild(stopDisk.firstChild) // torre clicada recebe o primeiro filho da div stopDisk
        }
    } else { //senão do primeiro if
        stopDisk.appendChild(diskSelect) // div stopDisk recebe o ultimo elemento filho da torre clicada
    }
    msgWin() //chama a função msgWin para mostrar a mensagem de vitoria caso todos os discos estejam em ordem na torre 3
}

// Adicionando o event listener no button e fazendo a funcionalidade de reset
button.addEventListener('click', reset)
function reset() { // função com a operação reset. Ao apertar o button reset todos os discos são adicionados a torre1 e a div que recebe a mensagem de vitoria, vai receber uma string vazia.
    tower1.appendChild(disk1)
    tower1.appendChild(disk2)
    tower1.appendChild(disk3)
    tower1.appendChild(disk4)
    victoryMsg.innerText = ""
}

// fazendo a mensagem de vitoria
function msgWin() {
    const winCondition = tower3.childElementCount; // declarando variavel para receber o valor do element child na torre 3

    if(winCondition === 4){ // se o element child na torre 3 for igual a 4 vai atingir a condição de vitoria
        victoryMsg.innerHTML = 'Você Venceu!' // mensagem de vitoria imprimida 
    }
}

