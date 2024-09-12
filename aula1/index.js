// arrays and object

let meta = { //  object

    value:  "Ler um livro por mês",  
    checked: true

}

let metas = [ //  array coleção de objects(Metas)

    meta, //   object armazenado em um array

    {  //  object armazenado em um array.



        value: "Caminhar 20 minutos todos os dias",
        checked: false

    }

]

console.log(metas[1].value); //acessando o array no indice 1 e puxando o valor da propriedade value de um object armazenado no arrey, mas que foi criado fora do array.
