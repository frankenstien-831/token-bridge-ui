FROM node:9-alpine
LABEL maintainer="Ocean Protocol <devops@oceanprotocol.com>"

RUN apk add --no-cache --update\
    bash\
    g++\
    gcc\
    git\
    gettext\
    make\
    python

COPY . /bridge/
WORKDIR /bridge

RUN npm install -g npm serve
RUN npm install
RUN rm -rf /bridge/node_modules/websocket/.git
RUN npm run build
RUN npm run postinstall

# Default ENV values
ENV LISTEN_ADDRESS='0.0.0.0'
ENV LISTEN_PORT='3000'

ENTRYPOINT ["/bridge/docker-entrypoint.sh"]
