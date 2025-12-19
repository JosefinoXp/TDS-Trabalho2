# --- Estágio 1: Construção (Build) ---
# Usa uma imagem do Node para construir o projeto
FROM node:20-alpine AS build

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (para aproveitar o cache do Docker)
COPY package.json package-lock.json ./

# Instala as bibliotecas DENTRO do container
RUN npm ci

# Copia o restante do código do projeto
COPY . .

# Constrói o projeto (Gera a pasta 'dist')
RUN npm run build

# --- Estágio 2: Servidor (Produção) ---
# Usa uma imagem leve do Nginx para servir o site
FROM nginx:alpine

# Copia a configuração do Nginx que criamos
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos gerados no estágio anterior para a pasta do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]