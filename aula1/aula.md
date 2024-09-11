## Linguagem de Programação 

Maneira de dar instruções ao computador.
São como peças de lego, você irá utilizar peças para criar algoritimos, ou seja,
para resolver problemas.

**Algoritimos**: É uma sequência de passos lógicos e finito, usado para a resolução de um problema.

## Peças da Liguagem de Programação **JavaScript**

- [x] Comentários
- [x] Doclaração de Variáveis (const , let)
- Operadoeres ([x]Atribuição, Concatenação,  Comparação, Matemáticos, Lógicos)
- Tipos de Dados (String, Number, Boolean, Null, Undefined)
- Estrutura de Dados (Functions, Object,  Array)
- Controle de Fluxo (If, Else)
-  Loop (For, While)


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



---

## Operadores

### 1. Atribuição
- São usados para atribuir valores a variáveis. </br>
Exemplos: </br> 
    
    
    ``` JS

    ``` JS 

       let x = 2
       let y = 3
       let z = x + y // Atribuição de valor a variável z.

    ```

