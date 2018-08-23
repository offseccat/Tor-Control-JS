#!/bin/bash
docker build -t tor-control-js-test .
docker run -d -v /etc/localtime:/etc/localtime --restart always -p 9001:9001 --name tor-control-js-test tor-control-js-test
