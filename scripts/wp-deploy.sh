#!/usr/bin/env bash

# Deletes the /public dir and the /wp-content/themes/LWCC/react-template.php file.
# Then copies the location /public dir and react-template.php to the remote host.

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m' # Cyan
NC='\033[0m' # No Color

DATE_TIME="$(date +"%F-%-H-%M-%S")"

printf "${CYAN}Backing up${NC} public directory... "
mkdir ~/Downloads/${DATE_TIME}
scp -P 18765 -r lwmn8969@35.209.180.216:/home/lwmn8969/public_html/lwcc/public ~/Downloads/${DATE_TIME}
tar -czf ~/Development/atsolberg/lwcc.org/public_backups/${DATE_TIME}.tar.gz ~/Downloads/${DATE_TIME}
rm -rf ~/Downloads/${DATE_TIME}
echo "✅"

printf "${RED}Deleting${NC} remote public directory contents... "
ssh -i ~/.ssh/lw_rsa lwmn8969@35.209.180.216 -p 18765 rm -rf "/home/lwmn8969/public_html/lwcc/public/*"
echo "✅"

printf "${CYAN}Copying${NC} local public directory contents to remote... "
rsync -e 'ssh -p 18765' -a public/ lwmn8969@35.209.180.216:/home/lwmn8969/public_html/lwcc/public/
echo "✅"

printf "${RED}Deleting${NC} remote react-template.php... "
ssh lwmn8969@35.209.180.216 -p 18765 rm -rf "/home/lwmn8969/public_html/lwcc/wp-content/themes/LWCC/react-template.php"
echo "✅"

printf "${CYAN}Copying${NC} local react-template.php to remote...\n"
scp -P 18765 ~/Development/atsolberg/lwcc.org/wp-stuff/react-template.php lwmn8969@35.209.180.216:/home/lwmn8969/public_html/lwcc/wp-content/themes/LWCC/

printf "${GREEN}Done!${NC}\n"