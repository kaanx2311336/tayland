FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json ./
COPY public ./public
COPY scripts ./scripts

EXPOSE 3000

CMD ["node", "scripts/dev-server.js"]
