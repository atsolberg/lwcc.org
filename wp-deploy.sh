#!/usr/bin/env bash

# Deletes the /public dir and the /wp-content/themes/LWCC/react-template.php file.
# Then copies the location /public dir and react-template.php to the remote host.

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m' # Cyan
NC='\033[0m' # No Color

printf "${RED}Deleting${NC} remote public directory contents... "
ssh bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com rm -rf "/opt/bitnami/apps/wordpress/htdocs/public/*"
echo "✅"

printf "${CYAN}Copying${NC} local public directory contents to remote... "
rsync -a public/ bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com:/opt/bitnami/apps/wordpress/htdocs/public/
echo "✅"

printf "${RED}Deleting${NC} remote react-template.php... "
ssh bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com rm -rf "/opt/bitnami/apps/wordpress/htdocs/wp-content/themes/LWCC/react-template.php"
echo "✅"

printf "${CYAN}Copying${NC} local react-template.php to remote...\n"
scp wp-stuff/react-template.php bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com:/opt/bitnami/apps/wordpress/htdocs/wp-content/themes/LWCC/

printf "${GREEN}Done!${NC}\n"