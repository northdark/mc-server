#!/usr/bin/env bash
cd /root/mc
pkill 'java'
java -Xmx768M -Xms512M -jar /root/mc/minecraft_server.1.9.jar