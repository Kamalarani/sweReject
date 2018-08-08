FROM node:8.9 as node


RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY XXXX
ENV PM2_SECRET_KEY YYYY
COPY . /usr/app-swe/
COPY package.json /usr/app-swe
#COPY .npmrc ./
WORKDIR /usr/app-swe/
RUN npm install --only=production



#default environment variables
ENV NODE_ENV production
ENV PORT 8088
EXPOSE 8088
CMD ["pm2-runtime", "server.js"]