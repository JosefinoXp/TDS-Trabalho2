# --- Estágio Base (Comum a todos) ---
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
# Instala dependências
RUN npm ci
# Copia o código fonte
COPY . .

# --- Estágio de DESENVOLVIMENTO (Dev) ---
# É aqui que o docker-compose vai mirar
FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# --- Estágio de Construção (Build/Produção) ---
FROM base AS build
RUN npm run build

# --- Estágio Final (Nginx/Produção) ---
FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]