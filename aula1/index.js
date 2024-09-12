// arrays and object

const meta = {

    value:  "Ler um livro por mês",  
    checked: false,
    log: (info)  => { // Usando uma arrow  function para criar uma função dentro de uma propriedade, do meu obje meta.
        // usando parâmetro info para passar o valor que quero atribuir a essa arrow function.

        console.log(info); // Usando o console.log para exibir o parameteo de sua arrow function

    }

}

meta.value = "Não é mais ler um livro"; // Reatribuindo o valor de uma  propriedade do meu objeto meta.

meta.log(meta.value);

// Function 

//const criarMeta = () => { }// Criando uma arrow function para criar uma meta

//function criarMeta() {} //  Criando uma função comum para criar uma meta

