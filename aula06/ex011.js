var idade = 60

console.log(`Sua idade é ${idade} anos`)

if(idade < 16){
    console.log('Não vota')
}

else if(idade < 18 || idade > 60){
    console.log('Voto opcional')
}

else{
    console.log('Voto obrigatório')
}