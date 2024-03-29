FROM node:16 as builder
LABEL maintainer="shivam.narula7@gmail.com"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80