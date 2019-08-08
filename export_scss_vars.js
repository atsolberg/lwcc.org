/**
 * This will create a file called `exported_scss_vars.json` at the project root
 * that will contain all the scss variables name/value pairs our our _variables.scss file.
 * Names are converted to camel case.
 *
 * This is run automatically by before parcel by the npm 'dev' and 'build' scripts.
 * You can run it manually with `npm run export:scss:vars`
 */

const fs = require('fs');
const postcss = require('postcss');
const scssSyntax = require('postcss-scss');
const exportVars = require('postcss-export-vars');

fs.readFile('src/styles/_variables.scss', (err, css) => {
  postcss([exportVars({ file: 'exported_scss_vars' })])
    .process(css, {
      from: 'src/styles/_variables.scss',
      to: 'src/styles/scss-vars.json',
      syntax: scssSyntax,
    })
    .then(() => {
      // Leave this here, without the .then call, the file won't get output.
    });
});
