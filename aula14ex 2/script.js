function tabuada(){
    //const numero = document.getElementsByName('n_numero')[0]
    const numero = document.querySelector('input#numero')
    const tab = document.querySelector('select#tabuada')

    if(numero.value.length == 0){
        alert('Preencha o campo "Número"')
    }
    else{
        const n = Number(numero.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}