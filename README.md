# J.M Portfolio - Trabalho 2 (TDS)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

Este projeto é uma aplicação web Front-end desenvolvida como parte de trabalho da disciplina de **Tecnologias para Desenvolvimento de Sistemas**, do curso de Ciência da Computação da **UNIOESTE**.

Nossa ideia foi criar um portfólio de fotografia fictício interativo, e o objetivo do trabalho é utilizar **React**, demonstrando o uso de Hooks, Componentização, Props, Eventos. Adicionalmente foi utilizado integração com Docker para facilitar desenvolvimento com ou sem depedências.

## 📋 Sobre o Projeto

O **J.M Portfolio** é uma Single Page Application (SPA) que simula o site de um fotógrafo profissional. A aplicação permite visualizar galerias de fotos, consultar pacotes, equipamentos e entrar em contato através de um formulário dinâmico.

### Requisitos Técnicos Atendidos:
O projeto cumpre os requisitos solicitados no Trabalho 2:
* ✅ **Componentização:** Estrutura modular (NavBar, HomePage, ImageCard, Modais).
* ✅ **Hooks:** Uso extensivo de `useState`, `useEffect` e criação de **Custom Hooks** (`useHttp`, `FundoDinamico`, `CarregarImagens`).
* ✅ **Interpolação e Listas:** Renderização de listas de imagens utilizando `map` e componentes reutilizáveis.
* ✅ **Eventos:** Manipulação de eventos de mouse, teclado e formulário.
* ✅ **Formulários:** Inputs variados (texto, select, checkbox, file) com controle de estado.
* ✅ **Estilização:** Uso de **CSS Modules** e **React Bootstrap**, com alteração dinâmica de classes baseada no horário do dia.

## 🚀 Tecnologias Utilizadas

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Docker](https://www.docker.com/) & Nginx

## 📂 Estrutura do Projeto

```bash
src/
├── assets/          # Imagens e vetores estáticos
├── components/      # Componentes React reutilizáveis
│   ├── Portfolio/   # Componentes da Galeria e Home
│   ├── SobreNos/    # Páginas informativas e Formulários
│   └── ...
├── hooks/           # Custom Hooks (Lógica extraída)
├── App.jsx          # Componente Raiz
└── main.jsx         # Ponto de entrada
```
🔧 Como Rodar o Projeto
Pré-requisitos

**Node.js** (versão 18 ou superior) & **NPM**

## ⚙️ Instalação Local

Clone o repositório:

```bash
git clone [https://github.com/JosefinoXP/tds-trabalho2.git](https://github.com/JosefinoXP/tds-trabalho2.git)
cd tds-trabalho2
```
Instale as dependências:

```bash
npm install
```
Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará rodando em http://localhost:5173.

## 🐳 Rodando com Docker

O projeto já está configurado com Dockerfile e docker-compose para facilitar a execução em contêineres.

Certifique-se de ter o Docker e Docker Compose instalados.

Na raiz do projeto, execute:

```bash
docker-compose up -d --build
```
Acesse a aplicação no navegador: http://localhost:80


## 👤 Autores
Trabalho desenvolvido para a disciplina Tecnologias para Desenvolvimento de Sistemas.

**[Github: José Lucas](https://github.com/JosefinoXp)**

**[Github: Guilherme Miller](https://github.com/zero123gui)**