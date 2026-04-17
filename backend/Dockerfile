# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci --only=production

# COPY . .

# EXPOSE 5555

# CMD ["npm", "start"]

FROM node:18-alpine ans builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /app .

EXPOSE 5555

CMD ["npm", "start"]