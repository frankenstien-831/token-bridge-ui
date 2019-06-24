#!/bin/sh

npm run build
echo "Starting Token Bridge UI..."
serve -l tcp://"${LISTEN_ADDRESS}":"${LISTEN_PORT}" -s /bridge/build

