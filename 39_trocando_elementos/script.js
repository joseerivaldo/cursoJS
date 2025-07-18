var el = document.createElement('h3')

el.classList = 'testando-classe'
var texto = document.createTextNode('Este é o conteudo do h3')

el.appendChild(texto)
console.log(el)

//selecionando o elemento que quer trocar
var title = document.querySelector('#title')

//selecionando o pai do el
//poderia fazer usando 
var pai = title.parentNode
//var body = document.querySelector('body')

//trocar os elementos
pai.replaceChild(el, title)