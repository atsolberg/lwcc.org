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

### Build and Deploy to Product
1. delete the contents of `/public`
1. run `npm run build:wphtml`
1. copy the contents of `/public/index.html` and replace the html in `/wp-stuff/react-template.php` with it.
1. delete `bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com:/opt/bitnami/apps/wordpress/htdocs/public` folder
1. ftp or scp the `public` folder to `bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com:/opt/bitnami/apps/wordpress/htdocs`
1. ftp or scp the `/wp-stuff/react-template.php` to `bitnami@ec2-52-26-12-22.us-west-2.compute.amazonaws.com:/opt/bitnami/apps/wordpress/htdocs/wp-content/themes/LWCC/`

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
- [ ] Get a valid cert on the dev environment
- [ ] Verify we can just drop the public folder into wp
- [x] Newsletter signup - finish styling
- [ ] Newsletter signup - Get mail chimp form submission endpoint
- [ ] Use or remove <MessagesProvider>
- [ ] Move ytapi to node app

Header
- [x] Header top nav ui
- [x] Header main nav ui
- [x] Figure out how to get menu data from wp
- [ ] Figure out how to get live streaming status from Youtube
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
- [ ] Initial ui
- [ ] Figure out url strategy
- [x] Figure out how to get related videos for a video on a channel
- [x] Just use video description as details content under title
- [ ] Finish mobile styling on related videos
- [ ] Set link (prefix) correctly on related videos, might have to make
      a generic video page.

Stories Page
- [ ] Initial ui

Resources Page
- [ ] Initial ui


