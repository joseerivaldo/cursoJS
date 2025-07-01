function calcular(){
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    let multa = document.querySelector('div#multa')

    var vel = Number(txtv.value);
    res.innerHTML = `Sua velocidade é ${vel}`

    if(vel >60){
        multa.innerHTML = 'Você foi multado por excesso de velocidade';
    }
    else{
        multa.innerHTML = '';
    }
    
}

function mensagem(){
    var country = document.querySelector('input#country').value
    var resp = document.querySelector('div#resp')

    if(country == 'Brasil'){
        resp.innerHTML = 'Você é Brasileiro'
    }
    else{
        resp.innerHTML = 'Você é estrangeiro'
    }

}