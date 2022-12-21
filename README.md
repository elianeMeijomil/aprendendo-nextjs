# aprendendoNext
Este projeto é a execução de um workflow para aprendizado de Next

## Introdução
Os primeiros passos para criação deste repositório e preparação do ambiente

### Primeiro Passo
Criação deste repositório para armazenar e organizar o projeto.

### Segundo Passo
Clonagem do repositório no VS Code para começar os trabalhos :)

```
git clone https://github.com/elianeMeijomil/aprendendoNext.git
```

### Terceiro Passo
Levando em consideração que o node.js já está configurado na máquina, usando o terminal no próprio VS Code
```
npm init -y
```
O que gera o arquivo *package.json*

### Quarto Passo
Instalando a dependências que serão usadas no projeto.
No caso o next.js, o react e o react-dom 
```
npm install next react react-dom

```
Esta ação gera o arquivo package-lock.json e a pasta node_modules com todos os arquivos de dependencia dentro dela.

### Quinto passo
Configurando o ambiente de desenvolvimento.
Incluir uma propriedade em scripts chamada "dev" contendo a string "next dev" dentro do arquivo packages.json.
Isso será chamado quando subir o server node em ambiende dev, fazendo o next subir junto e rodar o primeiro debug.
```
npm run dev
```
:warning: quando rodar isso pela primeira vez vai dar erro. Por isso você vai continuar para o sexto passo ;)

### Sexto Passo
O primeiro teste do next falhou por não haver uma pasta pages com arquivos para serem processados.
Vamos resolver este problema adicionando novas páginas ao projeto.

```
mkdir pages
touch pages/index.js
```
:memo: O primeiro arquivo index.js foi criado, mas caso queira usar TypeScript use a extensão .ts e assim por diante

### Sétimo Passo
Dentro do index.js fazemos a primeira chamada para a função Home que vai usar o React e o React-dom

### Oitavo Passo
Rodamos o app em ambiente de dev para testar
```
npm run dev
```
Desta vez obtendo um http://localhost:3000 pronto para ver a aplicação funcionando.