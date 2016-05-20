#!/usr/bin/env bash
cd /root/ngrok
./bin/ngrokd -domain="tunnel.ximing.vip" -httpAddr=":8732"  -tunnelAddr=":8731"