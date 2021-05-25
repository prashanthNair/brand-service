#!/bin/bash

# any future command that fails will exit the script
# set -e
# Lets write the public key of our aws instance
# eval $(ssh-agent -s)
# echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
 echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
 chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
# chmod +x ./deploy/disableHostKeyChecking.sh

# ssh -o StrictHostKeyChecking=no tech@migobucks.com uptime
ssh -i -----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEAjEeQj5JqjjCng+xcCkA79LnqwB7iJq/Uqow95+5FbqEbq/8j
9dk/aKAPWrca6wKu1aIqYOVc1D67XY4/Pl2fg/xgeiSI5jUsQk4ZEEDffvLsmPFT
BV2VXvKaQziBNoMYfOkukpTh257MCjpn2uWt/VI13w3O+w4B0Nzt5DfcC1hvM01k
Pcsy86BbloJ++1uSGAjl1xz2m8xaH4E7HJEGK4L6arN/kQtDjSyO8HdxHHQPDale
NGQqdobHZwiYQYnRP3CNog5yvn/thm5nKA19m5QZTtah76f/hMhz8EfCqliAJ4wc
40XPu58lWg/CWh9qjy+LLOOGlxjQyD0QTgXnawIDAQABAoIBAAJQ5CgaqLu0Pe/F
pTdeHB9MOn31hJJS8NXn/tWnb2oGKujKC5PxhER78AT1ZPJgVvab+MskvkWay4kd
4hlrfki1j/o0RDZYxmRJ2cwU5hu4cwOLaG18QA0TQEy/0BJQU8UsLGKrJpdzpba9
hB1vEVJPWyhVmAc5EfqayyqraWyegN2TcqN21vSXLoYFtZvQKpyxU0pFmYYF0F31
OsRZPY9lcdehE/E3KP23zYSzfYn/jYwa37LJ7Wb1JElhMRPNKeWNpdKtPYayuvzt
ku1lv2UhYFKgI9aOebtPx0Cm0sxExI4cVa+pUTxTPTwAowIQt6qvPvcpJrQMWI+c
fp6RKkECgYEA0XAtDYkSJTQ6DsqJHTRis0cLNFRvsu118X22VYoNXV+4qwE+UB7v
xq0HeFRAsFyXNaTtrcHYiBiHywPFE8wVs3hiXYRRet4VFSU5i4aGvYwuX8ASgfmZ
h4edOrgOzF3vNh7OZ2dVKoNO5CHBdZqyQkyvWIvkoB35wlC9rRpoqhECgYEAq3dX
LcuPUCFRsFtMR2QghLSdKkVsfBS0e50n8fmrbfgIerEqhX+RvQXQF+kbQCkgn8KK
hfCBLcBK4FiA7MzwKmJfQJnwBo9wmQ1RSLW21DMtiy8SF8CCzqJuSLvA5myxBTZu
Qn98+Q+BklDxUF4DOW+2OaFw+R4E4vFVN+Ox3bsCgYEAhaUrWqPJLGxzT9T2QeiX
wwbmo3HuBSN6S6uImnUJqjfWw2h7tuzG3OS1C5fX37J12wlvkZ1M6yucG3RAYi2s
+2Uqf7pbtCfbFC841Uv21yWIwhjytnXr/owPTNT+vHKEnuhxlZJeyk4YHYNczAr3
DU+Z5MsADRyTr+eN4dQkTcECgYEAhv/0HLNLh6xkE7UeLotP6wwFPfXg/ySSIU1P
2P1ZEsEZc/gvYWJaTXfZKio3cWGwNPjHdcMxAeOHUHF+OHL2mHhRRJyu1Ytz/Jz2
pYekhhgxQIdz+E1y79wFdrCUpRdonJEJaMPVkoa53ohqJnuOkFc7Is7QEuOmt0OJ
c/KK5OcCgYEAqQuGDiVJIBC9UauTJH+mzFId5WU/3ox2Z1Tr8jAZu+YONdMuHg+K
9PyApulaOKwqdUjvh6yo6hgE6/v9fYPUdya5+xdM/SuCaN67uCnAg9JnVU3wwaYR
W8lH3/lJb22pRFhencJBmLqtpbmozyQ2E9r9HxfbgjewCKwlO+PVBWw=
-----END RSA PRIVATE KEY----- root@65.2.141.174
# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
echo "ALL_SERVERS ${ALL_SERVERS}"
ssh root@65.2.141.174 'bash -s' < ./deploy/updateAndRestart.sh
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


