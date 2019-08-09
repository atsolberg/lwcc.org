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

### TODO
Misc
- [ ] Figure out youtube api
- [ ] Figure out how to get youtube playlists for series


Header
- [x] Header top nav ui
- [x] Header main nav ui
- [x] Figure out how to get menu data from wp
- [ ] Figure out how to get live event data
- [ ] Figure out 'live' link text when off-air
- [ ] Search bar ui, probably a slide in bar
- [ ] Search functionality
- [ ] Shrink top nav content on mobile
- [ ] Figure out url for live link

Footer
- [ ] Footer ui desktop
- [ ] Footer ui mobile, ask about this, maybe do accordian for location data
- [ ] Figure out how to get footer data from wp 

Video Page
- [ ] Initial ui

Sermons Page 
- [ ] Initial ui

Stories Page
- [ ] Initial ui

Resources Page
- [ ] Initial ui
