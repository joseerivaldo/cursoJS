function contar(){
    const inicio = document.querySelector('input#txti')
    const fim = document.querySelector('input#txtf')
    const passo = document.querySelector('input#txtp')
    const res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Preencha todos os campos')
    }
    else{
        res.innerHTML = 'Contando: '
        const i = Number(inicio.value)
        const f = Number(fim.value)
        const p = Number(passo.value)

        //contagem crescente
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
            //contagem regressiva
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}