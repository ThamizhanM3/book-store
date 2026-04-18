# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci --only=production

# COPY . .

# EXPOSE 5555

# CMD ["npm", "start"]

FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5555

CMD ["npm", "start"]