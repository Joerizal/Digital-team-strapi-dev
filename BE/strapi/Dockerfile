# FROM node:22-alpine
# # Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
# # RUN apt-get update && apt-get install libvips-dev -y
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /opt/
# # COPY package.json yarn.lock ./
# COPY ./package.json ./yarn.lock ./
# # RUN yarn global add node-gyp
# RUN yarn config set network-timeout 600000 -g && yarn install
# ENV PATH /opt/node_modules/.bin:$PATH

# WORKDIR /opt/app
# COPY ./ .
# # RUN chown -R node:node /opt/app
# # USER node
# # RUN ["yarn", "build"]
# RUN yarn build
# EXPOSE 1337
# CMD ["yarn", "develop"]


FROM node:22
# Installing libvips-dev for sharp Compatibility
#RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash libvips-dev
RUN apt-get update && apt-get install libvips-dev -y

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /BE/strapi/
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /BE/strapi/node_modules/.bin:$PATH

RUN mkdir -p /BE/strapi/app
WORKDIR /BE/strapi/app
#RUN chown -R node:node /backend/app
COPY . .
RUN ["yarn", "build"]
#USER node
EXPOSE 1337
CMD ["yarn", "develop"]