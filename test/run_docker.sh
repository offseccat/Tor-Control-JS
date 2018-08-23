#!/bin/bash
docker build -t tor-control-js-test .
docker run -d -v /etc/localtime:/etc/localtime --restart always -p 9001:9001 -p 9051:9051 --name tor-control-js-test tor-control-js-test
