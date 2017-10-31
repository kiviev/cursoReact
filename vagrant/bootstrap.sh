#!/usr/bin/env bash

Update () {
    echo "-- Update packages --"
    sudo apt-get update
    sudo apt-get upgrade
}
# Update

echo "-- Install tools and helpers --"
sudo apt-get install -y --force-yes python-software-properties vim htop curl git npm

echo "-- Install PPA's --"
sudo add-apt-repository ppa:ondrej/php
sudo add-apt-repository ppa:chris-lea/redis-server
Update

echo "-- Install NodeJS --"
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

echo "-- Install packages --"
# sudo apt-get install -y --force-yes git-core nodejs rabbitmq-server redis-server
sudo apt-get install -y --force-yes git-core nodejs 
npm install -g create-react-app
npm i -g npm@latest