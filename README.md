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
Runs parcel in dev mode with the dev server running at https://localhost:1234

### Build and Deploy to Production
From the lwcc.org directory:
```shell
npm run build
. ./wp-deploy.sh
```
Note: npm runs `prebuild` before, the `build` and `postbuild` after.
The `prebuild` cleans the public directory, and the `postbuild` re-creates the 
wordpress template using the newly built html.

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
  }
}
```


### TODO
Misc
- [x] Figure out youtube api
- [x] Get current series playlist id
- [x] Get a valid cert on the dev environment
- [x] Verify we can just drop the public folder into wp
- [x] Newsletter signup - finish styling
- [ ] Newsletter signup - Get mail chimp form submission endpoint
- [ ] Move ytapi to wp, see youtube php example
- [ ] Get all the playlists setup correctly in wp

Header
- [x] Header top nav ui
- [x] Header main nav ui
- [x] Figure out how to get menu data from wp
- [x] Figure out how to get live streaming status from Youtube
- [x] Set 'live' link to hidden when off-air
- [x] Set 'live' link url to churchonline.org
- [x] Shrink top nav content on mobile
- [x] Shrink navs on desktop so they don't wrap

Search
- [x] Search functionality
- [x] Search bar, close on esc key 
- [x] Search bar ui, probably a slide in bar

Footer
- [x] Footer ui desktop
- [x] Footer ui mobile
- [x] Get urls for privacy policy and terms of use
- [x] Set st paul link to http://lwcc.org/sainttpaul 

Media Page
- [x] Get youtube data fetching working
- [x] Search
- [x] Speaker portraits on video tiles
- [x] Implement 'load more' feature

Sermons Page 
- [x] Initial ui

Video Page
- [x] Initial ui
- [ ] Figure out url strategy
- [ ] Figure out how to get download content (backgrounds/quotes) for video
- [x] Figure out how to get related videos for a video on a channel
- [x] Just use video description as details content under title
- [x] Finish mobile styling on related videos
- [x] Make a generic video page for videos linked from 'related'.

Stories Page
- [x] Initial ui

Resources Page
- [x] Initial ui
- [ ] Get final images
- [ ] Get final copy
- [ ] Get url for 'Living Word Resources' tile.


