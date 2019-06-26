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

RUN npm install -g npm serve && \
    npm install && npm run postinstall && \
    rm -rf /bridge/node_modules/websocket/.git && \
    npm run build

# Default ENV values
ENV LISTEN_ADDRESS='0.0.0.0'
ENV LISTEN_PORT='3000'

ENTRYPOINT ["/bridge/docker-entrypoint.sh"]
