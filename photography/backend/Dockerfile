# Build stage
FROM node:alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage 
FROM node:alpine
WORKDIR /app
USER node
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist
EXPOSE 5000
CMD ["npm", "start"]
