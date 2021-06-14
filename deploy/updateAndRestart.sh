#!/bin/bash

# any future command that fails will exit the script
set -e

# Install Node
sudo apt-get install -y nodejs

# Delete the old repo
rm -rf /home/ubuntu/migobucksbrandservice

# clone the repo again
git clone https://gitlab.com/migobucks_personal/migobucksbrandservice.git
 
 
#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
source /home/ubuntu/.nvm/nvm.sh

# stop the previous pm2
# pm2 kill
# npm remove pm2 -g

#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
# sudo npm install pm2@latest -g
# starting pm2 daemon
# pm2 status

cd /home/ubuntu/migobucksbrandservice

# sudo fuser -k 2000/tcp
#install npm packages
echo "Running npm install"
npm install

#Restart the node server
npm run build
#Restart the node server
npm run start