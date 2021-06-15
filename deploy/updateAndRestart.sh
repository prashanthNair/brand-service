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
echo "/home/ubuntu/.nvm/nvm.sh"
# cat ~/home/ubuntu/.nvm/nvm.sh
# source /home/ubuntu/.nvm/nvm.sh

echo "Kill the previous pm2"
# stop the previous pm2
pm2 kill
echo "remove the previous pm2"
sudo npm remove pm2 -g

echo "install pm2"
#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
sudo npm install pm2@latest -g
# starting pm2 daemon
echo "pm2 Status"
pm2 status

cd /home/ubuntu/migobucksbrandservice

# sudo fuser -k 2000/tcp
#install npm packages
echo "Running npm install"
npm install

#Kill the Process
kill -9 $(lsof -t -i:3000)

#Restart the node server
npm run build
#Restart the node server
npm run start