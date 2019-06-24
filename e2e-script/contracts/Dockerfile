FROM node:8

RUN mkdir /stuff
WORKDIR /stuff

RUN git clone https://github.com/poanetwork/token-bridge-contracts.git

RUN mkdir submodules && \
    mv token-bridge-contracts submodules && \
    cd submodules/token-bridge-contracts && \
    git fetch && \
    git checkout 2.3.2

RUN cd submodules/token-bridge-contracts && \
    npm install && \
    ./node_modules/.bin/truffle compile && \
    cd deploy && \
    npm install
COPY deploy.sh .
COPY contracts.env submodules/token-bridge-contracts/deploy/
COPY erc-contracts.env submodules/token-bridge-contracts/deploy/
COPY erc-native-contracts.env submodules/token-bridge-contracts/deploy/
COPY deployERC20.js submodules/token-bridge-contracts/deploy/
RUN cd submodules/token-bridge-contracts/deploy && cp contracts.env .env
