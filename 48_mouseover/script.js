//mouseover - passar o mouse em cima

var title = document.querySelector('#title')

title.addEventListener('mouseover', function(){
    title.style.backgroundColor = 'red'

    var p = document.querySelector('#legenda')
    p.classList.remove('hide')
})

//mouseout - quando sai de cima do elemento
title.addEventListener('mouseout', function(){
    title.style.backgroundColor = 'white'

    var p = document.querySelector('#legenda')
    p.classList.add('hide')
})

