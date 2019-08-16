# 📖 lwcc.org
React app for the lwcc.org site.

### Development
Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
and then use it to install node: `nvm install node`
then clone repo and start the `dev` script:
```shell
git clone https://github.com/atsolberg/lwcc.org.git
cd lwcc.org
npm i
npm run dev
```
Runs parcel in dev mode with the app running at localhost:1234

### Build for production
```shell
git clone https://github.com/atsolberg/lwcc.org.git
cd lwcc.org
npm i
npm run build
```
Builds the index.js file for the app

### WordPress Shenanigans
Menu data was accessed form the wp rest api by adding the `WP-REST-API V2 Menus` plugin
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
  },
  ...
}
```


### TODO
Misc
- [x] Figure out youtube api
- [x] Get current series playlist id
- [ ] Get a valid cert on the dev environment
- [ ] Verify we can just drop the public folder into wp
- [ ] Newsletter signup - finish styling
- [ ] Newsletter signup - Figure out form submission endpoint
- [ ] Figure out how to get speaker images from wp

Header
- [x] Header top nav ui
- [x] Header main nav ui
- [x] Figure out how to get menu data from wp
- [ ] Figure out how to get live event data
- [ ] Figure out 'live' link text when off-air
- [ ] Figure out 'live' link url
- [x] Shrink top nav content on mobile
- [ ] Collapse some menus to a 'More' menu on tablet

Search
- [x] Search functionality
- [x] Search bar, close on esc key 
- [x] Search bar ui, probably a slide in bar

Footer
- [x] Footer ui desktop
- [x] Footer ui mobile
- [ ] Get urls for privacy policy and terms of use 

Media Pages
- [x] Get youtube data fetching working
- [x] Search
- [x] Speaker portraits on video tiles

Sermons Page 
- [x] Initial ui

Stories Page
- [ ] Initial ui

Resources Page
- [ ] Initial ui

Video Page
- [ ] Initial ui

