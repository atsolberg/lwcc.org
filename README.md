# 📖 lwcc.org
React app for the lwcc.org site header and footer.

### Development
1. Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
2. Install node: `nvm install node`
3. Make sure you are using node 16 with `nvm use 16` 
4. Clone repo, install node modules, and start the `dev` server:
```shell
git clone https://github.com/atsolberg/lwcc.org.git
cd lwcc.org
npm i
npm run dev
```
Runs parcel in dev mode with the dev server running at https://localhost:1234

### Build and Deploy to Production
1. Make sure you are using node 16 with `nvm use 16`
2. From the lwcc.org directory, run:
```shell
npm run build
. ./scripts/wp-deploy.sh
```
2. From the wp server, download `/www/lwcc.org/public_html/wp-content/themes/LWCC/footer.php` file
3. Update the `v` param in the header-footer script and css link to the current timestamp:
```html
<script src="/public/header-footer.js?v=1660089730678"></script>
``` 

_Note_: npm runs `prebuild` before the `build` and `postbuild` after.  
The `prebuild` cleans the public directory.

### WordPress Shenanigans
Menu data was accessed from the wp rest api by adding the `WP-REST-API V2 Menus` plugin.
