# aprendendoNext
Este projeto é a execução de um workflow para aprendizado de Next

## Introdução
Os primeiros passos para criação deste repositório e preparação do ambiente

### Setup

1. Criação deste repositório para armazenar e organizar o projeto.

2. Clonagem do repositório no VS Code para começar os trabalhos :)

  ```bash
  $ git clone https://github.com/elianeMeijomil/aprendendoNext.git
  ```

3. Levando em consideração que o node.js já está configurado na máquina, usando o terminal no próprio VS Code

  ```bash
  $ npm init -y
  ```
O que gera o arquivo *package.json*

4. Instalando a dependências que serão usadas no projeto.

No caso o next.js, o react e o react-dom 

  ```bash
  $ npm install next react react-dom
  ```
Esta ação gera o arquivo package-lock.json e a pasta node_modules com todos os arquivos de dependencia dentro dela.

5. Configurando o ambiente de desenvolvimento.

Incluir uma propriedade em scripts chamada "dev" contendo a string "next dev" dentro do arquivo packages.json.
Isso será chamado quando subir o server node em ambiende dev, fazendo o next subir junto e rodar o primeiro debug.

  ```bash
  $ npm run dev
  ```
:warning: Ao rodar isso pela primeira vez vai dar erro. Por isso você vai continuar para o sexto passo :wink:

6. O primeiro teste do next falhou por não haver uma pasta pages com arquivos para serem processados.

Vamos resolver este problema adicionando novas páginas ao projeto.

  ```bash
  $ mkdir pages
  $ touch pages/index.js
  ```
:memo: O primeiro arquivo index.js foi criado, mas caso queira usar TypeScript use a extensão .ts e assim por diante

7. Dentro do index.js fazemos a primeira chamada para a função Home que vai usar o React e o React-dom

8. Rodamos o app em ambiente de dev para testar

  ```bash
  $ npm run dev
  ```
Desta vez obtendo um http://localhost:3000 pronto para ver a aplicação funcionando.

...

## :warning: Disclaimer

As imagens usadas no exemplo de rotas imagens de produtos foram retiradas do site [icons8](https://icons8.com/)
