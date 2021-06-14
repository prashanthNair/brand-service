#!/bin/bash

# any future command that fails will exit the script
set -e

# Install Node
sudo apt-get install -y nodejs

# Delete the old repo
rm -rf /home/ubuntu/migobucksbrandservice

# clone the repo again
git clone https://gitlab.com/migobucks_personal/migobucksbrandservice.git
 
cd /home/ubuntu/migobucksbrandservice

# sudo fuser -k 2000/tcp
#install npm packages
echo "Running npm install"
npm install

#Restart the node server
npm run build
#Restart the node server
npm run start