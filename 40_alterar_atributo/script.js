var title = document.querySelector('#title')

title.setAttribute('class', 'testando-atributo')
console.log(title)

//desabilitando o botão
var button = document.querySelector('#btn')
button.setAttribute('disabled', 'disabled')

//
var subtitle = document.querySelector('.subtitle')
subtitle.setAttribute('id', 'subtitle1')


//removendo atributos
subtitle.removeAttribute('class')