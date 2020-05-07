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
From the lwcc.org directory:
```shell
npm run build
. ./scripts/wp-deploy.sh
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


### TODO
[ ] - fix the menu hamburger starting as an 'x'
