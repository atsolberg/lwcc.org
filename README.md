# 📖 lwcc.org
React app for the lwcc.org site.

### Development
1. Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
1. Install node: `nvm install node`
1. Clone repo, install node modules, and start the `dev` server:
```shell
git clone https://github.com/atsolberg/lwcc.org.git
cd lwcc.org
npm i
npm run dev
```
Runs parcel in dev mode with the dev server running at https://localhost:1234

### Build and Deploy to Production
1. From the lwcc.org directory, run:
```shell
npm run build
. ./scripts/wp-deploy.sh
```
2. From the wp server, download `/www/lwcc.org/public_html/wp-content/themes/LWCC/footer.php` file
3. Update the `v` param in the header-footer.js script to the current timestamp:
```html
<script src="/public/scripts/header-footer.js?v=1610394195400"></script>
``` 

_Note_: npm runs `prebuild` before the `build` and `postbuild` after.  
The `prebuild` cleans the public directory.  
The `postbuild` re-creates the wordpress template using the newly built html.

### WordPress Shenanigans
Menu data was accessed from the wp rest api by adding the `WP-REST-API V2 Menus` plugin.  
Playlist data was achieved by adding the `Custom Post Type UI` to create 'Playlist'   
post types, adding `Advanced Custom Fields` to add custom fields to the custom  
`Playlist` post types, and `ACF to REST API` to get that data into the rest api.  

Example Playlist Request:
```
https://52.26.12.22/wp-json/wp/v2/playlists/2669
```
Response:
```json
{
  "id": 2669,
  "slug": "current-series",
  "type": "playlists",
  "title": {
    "rendered": "Current Series"
  },
  
  "acf": {
    "name": "Current Series",
    "id": "PL7LE6jm_pt7yg5Xw-z1HS8T-wEacfYy2r"
  }
}
```
