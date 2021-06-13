#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
# [ -z $SSH_AUTH_SOCK ] && `eval ssh-agent` && echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# disable the host key checking.
# ./deploy/disableHostKeyChecking.sh
set -e
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

echo "ALL_SERVERS"
  ssh ubuntu@${DEPLOY_SERVERS} 'bash -s' < ./deploy/updateAndRestart.sh


