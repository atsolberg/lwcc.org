#!/usr/bin/env bash

# Deletes the remote host's /public dir and the /wp-content/themes/LWCC/react-template.php file.
# Then copies my /public dir and react-template.php to the remote host.

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m' # Cyan
NC='\033[0m' # No Color

DATE_TIME="$(date +"%F-%-H-%M-%S")"

printf "${CYAN}Backing up${NC} public directory... "
mkdir ~/Downloads/${DATE_TIME}
scp -P 18765 -r u3-m255kwj632s3@35.209.180.216:/home/u3-m255kwj632s3/www/lwcc.org/public_html/public ~/Downloads/${DATE_TIME}
tar -czf ~/Development/atsolberg/lwcc.org/public_backups/${DATE_TIME}.tar.gz ~/Downloads/${DATE_TIME}
rm -rf ~/Downloads/${DATE_TIME}
echo "✅"

printf "${RED}Deleting${NC} remote public directory contents... "
ssh -i ~/.ssh/lw_rsa u3-m255kwj632s3@35.209.180.216 -p 18765 rm -rf "/home/u3-m255kwj632s3/www/lwcc.org/public_html/public/*"
echo "✅"

printf "${CYAN}Copying${NC} local public directory contents to remote... "
rsync -e 'ssh -p 18765' -a public/ u3-m255kwj632s3@35.209.180.216:/home/u3-m255kwj632s3/www/lwcc.org/public_html/public/
echo "✅"

printf "${RED}Deleting${NC} remote react-template.php... "
ssh u3-m255kwj632s3@35.209.180.216 -p 18765 rm -rf "/home/u3-m255kwj632s3/www/lwcc.org/public_html/wp-content/themes/LWCC/react-template.php"
echo "✅"

printf "${CYAN}Copying${NC} local react-template.php to remote...\n"
scp -P 18765 ~/Development/atsolberg/lwcc.org/wp-stuff/react-template.php u3-m255kwj632s3@35.209.180.216:/home/u3-m255kwj632s3/www/lwcc.org/public_html/wp-content/themes/LWCC/

printf "${GREEN}Done!${NC}\n"