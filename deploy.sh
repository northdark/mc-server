#!/usr/bin/env bash
git pull origin master
pm2 startOrGracefulReload ./pm2/develope.json --env develope