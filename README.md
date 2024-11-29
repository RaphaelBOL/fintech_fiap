# Tela Cadastro de Transação - FINTECH

![Capa do Projeto](./src/img/04%20Adicionar%20Transação.png)

Este projeto consiste em uma tela criada utilizando o framework Tailwind CSS, desenvolvida como parte do curso de Análise e Desenvolvimento de Sistemas na FIAP. A tela faz parte de um aplicativo de finanças chamado Fintech, cujo objetivo é auxiliar os usuários no gerenciamento de suas finanças pessoais.

## Descrição do Projeto

A tela desenvolvida é destinada à criação de novas transações financeiras, permitindo ao usuário inserir informações como:

- **Tipo de Transação**: Receita, Despesa, Transferência, Investimento ou Dívida.
- **Descrição**: Detalhes sobre a transação.
- **Valor**: Quantia envolvida na transação, com formatação monetária brasileira.
- **Data de Vencimento**: Seleção de data utilizando um seletor de calendário personalizado.
- **Efetivada**: Indicação se a transação já foi realizada.
- **Categoria e Subcategoria**: Classificação da transação para melhor organização.
- **Conta**: Conta financeira relacionada à transação (ex: Santander, Itaú, Bradesco).

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **Tailwind CSS**: Estilização e responsividade.
- **JavaScript**: Funcionalidades interativas, como máscaras de input e manipulação de eventos.

## Funcionalidades Implementadas

- **Máscara para Campo de Valor**: Formatação automática do valor monetário conforme o usuário digita, seguindo o padrão brasileiro (R$ xxx.xxx,xx).
- **Seletor de Data Personalizado**: Exibição de um seletor de data ao clicar no ícone de calendário, com ícone padrão ocultado.
- **Estilização Dinâmica dos Selects**: Alteração da cor do texto dos campos de seleção conforme a opção escolhida (ex: receitas em verde, despesas em vermelho).

## Como Executar o Projeto

1. Clone o repositório:
  ```bash
  git clone https://github.com/RaphaelBOL/fintech_fiap.git
  ```

2. Instale as dependências do Tailwind CSS:

Certifique-se de ter o Node.js e o npm instalados em sua máquina.
  ```bash
  npm install
  ```

3. Compile o Tailwind CSS:
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

4. Abra o arquivo index.html no seu navegador preferido.

## Estrutura de Pastas

- **index.html**: Arquivo principal da página.
- **src/**: Contém os arquivos de estilo e scripts personalizados.
  - **style.css**: Estilos personalizados além do Tailwind CSS.
  - **scripts.js**: Código JavaScript para funcionalidades interativas.
  - **input.css**: Ponto de entrada para o Tailwind CSS.
- **dist/**: Arquivos compilados.
  - **output.css**: CSS gerado pelo Tailwind.


## Autor

Desenvolvido por Raphael como parte do curso de Análise e Desenvolvimento de Sistemas na FIAP.

## Licença

Este projeto é de uso livre para fins de aprendizado. Se usar partes deste projeto, por favor, dê os devidos créditos.