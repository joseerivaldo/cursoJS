var el = document.createElement('div')

el.classList = 'div-criada'

console.log(el)

var container = document.querySelector('#container')

container.appendChild(el)

//insertBefore

var el2 = document.createElement('div')

el2.classList = 'Segunda-div'
console.log(el2)

el3 = document.querySelector('#container .div-criada')
console.log(el3)

container.insertBefore(el2, el3)