#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
# echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
#chmod +x ./deploy/disableHostKeyChecking.sh
#!/bin/bash

 #chmod a+x
# any future command that fails will exit the script
#sudo set -e
# any future command that fails will exit the script
set -e
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

# any future command that fails will exit the script
# set -e
# Lets write the public key of our aws instance
# eval $(ssh-agent -s)
# echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
# echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
# chmod +x ./deploy/disableHostKeyChecking.sh

# ssh -o StrictHostKeyChecking=no tech@migobucks.com uptime

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
# ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
echo "ALL_SERVERS ${ALL_SERVERS}"
# ssh root@65.2.141.174 'bash -s' < ./deploy/updateAndRestart.sh
# Lets iterate over this array and ssh into each EC2 instance
# Once inside.
# 1. Stop the server
# 2. Take a pull
# 3. Start the server
# for server in "${ALL_SERVERS[@]}"
# do
#  echo "deploying to ${server}"
#  ssh ubuntu@${server} 'bash -s' < ./deploy/updateAndRestart.sh
# done


# This the the prompt we get whenever we ssh into the box and get the message like this
#
# The authenticity of the host 'ip address' cannot be verified....
#
# Below script will disable that prompt

# note ">>". It creates a file if it does not exits.
# The file content we want is below
#
# Host *
#   StrictHostKeyChecking no
#

# any future command that fails will exit the script
set -e
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config   


# ssh -o StrictHostKeyChecking=no tech@migobucks.com uptime

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
echo "ALL_SERVERS ${ALL_SERVERS}"
echo "deploying to 65.2.141.174"
apt-get update -qq
apt-get install -qq git 
# 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )' - eval $(ssh-agent -s)
eval $(ssh-agent -s)
echo "Step 2"
mkdir -p ~/.ssh
chmod 700 ~/.ssh
#echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null 
#'[[ -f /.dockerenv ]] && echo -e "Host *\n\t StrictHostKeyChecking no \n\n" > ~/.ssh/config' 
#ssh-keyscan 65.2.141.174 >> ~/.ssh/known_hosts
# chmod 644 ~/.ssh/known_hosts

#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repo
rm -rf /migobucksbrandservice/

# clone the repo again
git clone https://gitlab.com/migobucks_personal/migobucksbrandservice.git

#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
# source /home/ubuntu/.nvm/nvm.sh

# stop the previous pm2
#pm2 kill
# npm remove pm2 -g


#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
npm install pm2 -g
# starting pm2 daemon
pm2 status

#mkdir app
#cd /home/ubuntu/migobucksbrandservice

#install npm packages
echo "Running npm install"
npm install

#build 
npm run build

#Restart the node server
npm run start

# ssh root@65.2.141.174 'bash -s' < ./deploy/updateAndRestart.sh
# Lets iterate over this array and ssh into each EC2 instance
# Once inside.
# 1. Stop the server
# 2. Take a pull
# 3. Start the server
# for server in "${ALL_SERVERS[@]}"
# do
#  echo "deploying to ${server}"
#  ssh ubuntu@${server} 'bash -s' < ./deploy/updateAndRestart.sh
# done


