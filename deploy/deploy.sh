#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null


# disable the host key checking.
# ./deploy/disableHostKeyChecking.sh
set -e
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
#ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
echo "ALL_SERVERS"
  ssh ubuntu@${DEPLOY_SERVERS} 'bash -s' < ./deploy/updateAndRestart.sh
# Lets iterate over this array and ssh into each EC2 instance
# Once inside.
# 1. Stop the server
# 2. Take a pull
# 3. Start the server
#for server in "${ALL_SERVERS[@]}"
#do
#  echo "deploying to ${server}"
#  ssh ubuntu@${server} 'bash -s' < ./deploy/updateAndRestart.sh
# done


