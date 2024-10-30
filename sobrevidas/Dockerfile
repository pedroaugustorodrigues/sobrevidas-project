# Use uma imagem base com Node.js
FROM node:16

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Exponha a porta do aplicativo (se necessário)
EXPOSE 8081

# Comando para iniciar o Metro bundler
CMD ["npm", "start"]
