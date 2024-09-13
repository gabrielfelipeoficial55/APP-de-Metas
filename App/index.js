function start() { // Função que inicía a aplicação
    
    while(true) { // Estrutura de Repetição
        
        let opcao = "sair"; //  Variável que armazena a opção escolhida pelo usuário.

        switch(opcao) { //  Estrutura de Decisão / Condicional

            case "Cadastar": //   Caso em que a opção é "Cadastar"

                console.log("Vamos cadastrar"); // Saída para quando o caso seja opcao "Cadastar".

                break // Encerra o caso.

            case "listar": //  Caso em que a opção é "listar"

                console.log("Listar");  // Saída para quando o caso seja opcao "listar".

                break // Encerra o caso

            case "sair": // Caso em que a opção é "Sair"

                return //  Encerra a função.


        }

    }

}

start (); // Inicia a aplicação.

/*

    Atenção : O código assima como um exemplo de como funciona a estrutura de repetição while e a estrutura de decisão switch, nesse caso a estrutura de repetição é sempre true então ela vai sempre ser executada,
    quando os casos forem Cadastrar e listar, o programa será execultada infinitamente, para sair deixe seu terminal selecionado é de o comando <ctrl + c> para a aplicação ser encerrada, caso seja sair, a aplicação executará o laço de repetição e condo chegar no caso sair o programa irá encerrar.


*/