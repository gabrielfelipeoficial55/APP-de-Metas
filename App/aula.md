## Linguagem de Programação 

Maneira de dar instruções ao computador.
São como peças de lego, você irá utilizar peças para criar algoritimos, ou seja,
para resolver problemas.

**Algoritimos**: É uma sequência de passos lógicos e finito, usado para a resolução de um problema.

## Peças da Liguagem de Programação **JavaScript**

- [x] Comentários
- [x] Doclaração de Variáveis (const , let)
- Operadoeres ([x]Atribuição, [x]Concatenação,  [x]Comparação, Matemáticos, [x]Lógicos)
- Tipos de Dados ([x]String, [x]Number, [x]Boolean, Null, Undefined)
- Estrutura de Dados ([x]Functions, [x]Object, [x]Array)
- Controle de Fluxo (If, Else)
-  Loop (For, [x]While)


## Entender de forma clara e objetiva fases da resolução de um problema

- Coletar dados
- Processar os dados (Manipular, Alterar, Transformar, etc...)
- Apresentar os dados (Exibir, Imprimir, etc...)

---

## Escopo e Váriaveis
- **Escopo**: É o local onde a variável é acessível.
    - **Escopo Global**: Variáveis e funções acessíveis em qualquer lugar do código.
    - **Escopo de Função**: Variáveis acessíveis apenas dentro da função onde foram declaradas.
    - **Escopo de Bloco**: Variáveis acessíveis apenas dentro do bloco onde foram declaradas (```let``` e ```const```).
- **Variáveis**: São espaços reservados na memória para armazenar dados.
- **Sintáxe de Variáveis**: 

    ```MD  
    
        **let/const**: Indica para o computador que ali irá ser declara a variável.

        let nome/apelido: Aqui você colocar um nome para a sua variavel isso é importante para que possa chama-la em outros lugares do seu documento JavaScript.

        const nome/apelido: Aqui você colocar um nome para a sua variavel isso é importante para que possa chama-la em outros lugares do seu documento JavaScript

        let nome/apelido = : O Igual é um operador de atribuição, quer dizer que, após o = vem o valor ou o que você quer guardar.

        const  nome/apelido = : O Igual é um operador de atribuição, quer dizer que, após o = vem o valor ou o que você quer guardar.

        let nome/apelido = Valor :  Aqui você coloca o valor que você quer guardar na variável.

        const nome/apelido = Valor :  Aqui você coloca o valor que você quer guardar na variável.

    
    ```

### Variaveis Locais

- **Variaveis Locais**:  São declaradas dentro de uma função, ou em bloco de instruções. </br>

    ```JS
        
        function  minhaFuncao() {

            // Variaveis Locais
            const meuNome = "Gabriel Felipe"; // Usando cost para declarar variáveis que não podem ser reatribuídas.
            let minhaIdade = 19; // Usando let para declarar variáveis que poderam ser reatribuídas.

            console.log(`Meu nome é ${meuNome}, e minha idade é ${minhaIdade} anos`); // Exibir no console.

        }

        minhaFuncao() // Chamando a minha função para ser executada.

    ```

### Variaveis  Globais

- **Variáveis  Globais**: São declaradas fora de uma função ou bloco de instrução, algumas delas são declaradas no topo do documento.

    ```JS
        
        // Variaveis Globais
        const meuNome = "Gabriel Felipe"; // Usando cost para declarar variáveis que não irá mudar.
        let minhaIdade = 19; // Usando let para declarar variáveis que irão mudar.
        
        function  minhaFuncao() {

            console.log(`Meu nome é ${meuNome}, e minha idade é ${minhaIdade} anos`); // Exibir no console.

        }

        minhaFuncao() // Chamando a minha função para ser executada.

    ```

---

## Tipos de Dados 

###  1. String

-  São sequências de caracteres, ou seja, letras, números e símbolos.


###  2. Number

####  2.1. Inteiro
- São números inteiros, ou seja, sem casas decimais.</br>
    Exemplos: ``` 1,2,3,4 .... ```

#### 2.2. Float
- São números com casas decimais. </br>
    Exemplos: ```1.23, 1.34, 12.34```


####  2.3. Boolean
- São valores que podem ser verdadeiro ou falso. </br>
Exemplos:

    ```JS 

        const boolensModelo =  true; // True é verdadeiro e false é falso.
        const boolensModelo =  false; // True é verdadeiro e false é falso.


    ```


---

## Operadores

### 1. Atribuição
- São usados para atribuir valores a variáveis. </br>
Exemplos: </br> 

    ``` JS 

       let x = 2
       let y = 3
       let z = x + y // Atribuição de valor a variável z.

    ```

### 2. Operador de Concatenação
- São usados para concatenar strings. </br>
Exemplos: </br>

    ```JS  
    
        const metas =  ["Beber", "Água"];  // Array de strings

        onsole.log(metas[0] + ", " +  metas[1]); // Concatenação de strings.
    
    ```

> **Dica:**
>  Para concatenar strings, você pode usar o operador `+`,
>
>  1. Mas o operador `+` não é usado para fazer operações matemáticas?
>
>       - Sim, ele também é usado para fazer operações matemáticas, mas pode ser usado para    concatenar strings também.
> 
>  2. Mas então como o JavaScript sabe quando usar para operação matemática ou concatenar strings?
>
>       - O JavaScript sabe porque ele analisa o tipo de dados que você está usando. 
>       - Se você estiver usando números, ele fará a operação matemática, 
>       - Se você estiver usando strings, ele fará a concatenação.


### 3.  Operador de Comparação
-  São usados para comparar valores. </br>
 Exemplos: </br>

#### 3.1. Operador de Igualdade

 **Para verificar / comparar se um valor é igual ao outro usamos  o operador `==` ou `===`**
 - `==` é usado para comparar valores, mas ele não verifica o tipo de dado.
 - `===` é usado para comparar valores e verificar o tipo de dado.

####  3.2. Operador de Desigualdade / Diferente
**Para verificar / comparar se um valor é diferente do outro usamos o operador `!= ` ou `!==`**
- `!=` é usado para comparar valores, mas ele não verifica o tipo de dado.
- `!==` é usado para comparar valores e verificar o tipo de dado.

#### 3.3. Operador de Maior que
**Para verificar / comparar se um valor é maior que o outro usamos o operador ` >`**
- Ele é usado para comparar valores numéricos.
- Ele não é usado para comparar strings.
- Ele não é usado para comparar arrays ou objetos.
- Ele não é usado para comparar booleanos.
- Ele não é usado para comparar null ou undefined.
- Ele não é usado para comparar NaN (Not a Number).

####  3.4.  Operador de Menor que
**Para verificar / comparar se um valor é menor que o outro usamos o operador `< `**
- Ele é usado para comparar valores numéricos.
- Ele não é usado para comparar strings.
- Ele não é usado para comparar arrays ou objetos.
- Ele não é usado para comparar booleanos.
- Ele não é usado para comparar null ou undefined.
- Ele não é usado para comparar NaN (Not a Number).

####  3.5. Operador de Maior ou Igual que
**Para verificar / comparar se um valor é maior ou igual ao outro usamos o operador  `>=`**
- Ele é usado para comparar valores numéricos.
- Ele não é usado para comparar strings.
- Ele não é usado para comparar arrays ou objetos.
- Ele não é usado para comparar booleanos.
- Ele não é usado para comparar null ou undefined.
- Ele não é usado para comparar NaN (Not a Number).

####  3.6. Operador de Menor ou Igual que
**Para verificar / comparar se um valor é menor ou igual ao outro usamos o operador  `<=`**
- Ele é usado para comparar valores numéricos.
- Ele não é usado para comparar strings.
- Ele não é usado para comparar arrays ou objetos.
- Ele não é usado para comparar booleanos.
- Ele não é usado para comparar null ou undefined.
- Ele não é usado para comparar NaN (Not a Number).


### 4. Spread Operator (Operador de Espalhar)
**O operador de espalhar é usado para criar uma cópia de um array ou objeto. Ele é representado pelo símbolo `...`**
- Ele é usado para criar uma cópia de um array ou objeto.
- Ele é usado para criar uma cópia de um array ou objeto e adicionar elementos a ele.
- Ele é usado para criar uma cópia de um array ou objeto e remover elementos dele.
- Ele é usado para criar uma cópia de um array ou objeto e modificar elementos dele.





## Estruras de Dados 

### 1.  Arrays
- É uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Arrays são úteis para armazenar coleções de dados que podem ser acessados e manipulados de forma sequencial. </br>
Exemplos: </br>
    
    ``` JS
        const metas = ["Gabriel", "Alô!"]; // Criando e armazenando arrays do  tipo string.


        console.log(metas[1] + ", " + metas[0]);  // Concatenação de strings.


    ```

**- Nos arrays podemos acessar aguns metodos  como: push, [find, forEach, filter]: HOF  (Higher Order Function)**


###  2. Objetos
- Em JavaScript, um objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor. Os objetos permitem agrupar dados relacionados e funções que podem ser usadas para operar nesses dados. </br>
Exemplos: </br>
    
    ```JS

        const meta = { //  Criando objetos e armazenando propriedades e valores.


            value: "Ler um livro por mês", //  Propriedade: Valor
            checked: false // Propriedade: Valor


        }

        console.log(meta.value); // Acessando propriedades e valores do object meta.


    ```
> **Dica**
> Note que para acessar  as propriedades e valores de um objeto, você pode usar o operador `.`.  </br>
> 
>   ``` JS
>
>       console.log(meta.value)  // Acessando propriedades e valores do object meta.
>
>   ```


### 3. Functions 
 - Em JavaScript, uma função é um bloco de código projetado para executar uma tarefa específica. Funções permitem que você encapsule um conjunto de instruções que podem ser reutilizadas em diferentes partes do seu código, facilitando a organização, manutenção e a reutilização do código. </br>

#### Para Que Servem as Funções?
##### As funções servem para:

> - **Reutilização de Código**: Você pode definir uma função uma vez e chamá-la sempre que precisar realizar a mesma tarefa.
> - **Organização**: Funções ajudam a dividir o código em partes menores e mais manejáveis.
> - **Modularidade**: Permite que você crie código modular que pode ser facilmente testado e depurado.
> - **Abstração**: Oculta a complexidade e permite que você trabalhe com operações de forma mais simples e compreensível.

 > Mas dentre as funções existem varios tipos que podem ser usadas em diferentes contextos/ ou resolver  diferentes problemas. </br>

 **Vamos ver umpouco mais sobre cada uma delas:**

####  3.1. Função Simples

    ```JS

        // Função para somar dois números
        function somar(a, b) {
        return a + b;
        }

        // Chamando a função
        const resultado = somar(5, 3);
        console.log(resultado); // Saída: 8

    ```
## Estrutura de Repetição
- Estruturas de repetição são usadas para executar um bloco de código várias  vezes, dependendo de uma condição. Elas permitem que você execute um conjunto de instruções enquanto uma condição for verdadeira. 

- Existem dois tipos principais de estruturas de repetição em JavaScript: `while` e `for`. </br>

###  1.1 Estrutura de Repetição While
- A estrutura de repetição `while` executa um bloco de código enquanto uma condição for verdadeira.
- A sintaxe básica da estrutura de repetição `while` é a seguinte:

### 1.2. Sintaxe do while
---

    ```JS

        while (condição) {  // Condição que deve ser verdadeira para executar o bloco de código.

            // Bloco de código a ser executado

        }


    ```


- **Condição**: Uma expressão que será avaliada antes de cada iteração. Enquanto a condição for verdadeira, o bloco de código será executado.
- **Bloco de código**: O conjunto de instruções que será repetido enquanto a condição for verdadeira.

---

###  1.3. Exemplo de uso do while
---

> Vamos começar com um exemplo simples que **imprime números de 1 a 10 no console**:

    ```JS

        let contador = 1;  // Inicializando a variável contador com o valor 1 o contador é um controlador de fluxo do loop.

        while (contador <= 10) {  // Condição que deve ser verdadeira para executar o bloco de código.

            console.log(contador); // Bloco de código a ser executado.
            contador++

        }

    ```

## Estruturas Condicionais

- Estruturas condicionais são usadas para executar um bloco de código dependendo de uma condição. Elas permitem que você execute um conjunto de instruções se uma  condição for verdadeira ou falsa.

### 1.1 Estrutura condicional Switch
- A estrutura condicional `switch` é usada para comparar um valor com vários valores possíveis e executar um bloco de código correspondente.

 - A sintaxe básica da estrutura condicional `switch` é a seguinte:

        ```js

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

        ```

### 1.2 Estrutura Condicional (IF &  ELSE)
-  A sintaxe básica da estrutura condicional `if` é a seguinte:

    ```JS 

        if (condição) {

            // bloco de código a ser executado se a condição for verdadeira

        }else {

            // bloco de código a ser executado se a condição for falsa

        }

    ```




## Módulos em node.js

- [x] Importação de módulos (require, CommonJS)
- [x] Biblioteca 'inquirer', para criar prompts interativos.

## Programação assíncrona e Promises

- [x] Uso de funções assíncronas (async/await)