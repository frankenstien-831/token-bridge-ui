#!/bin/sh

echo "Starting Token Bridge UI..."
serve -l tcp://"${LISTEN_ADDRESS}":"${LISTEN_PORT}" -s /bridge/build

