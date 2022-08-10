/**
 * This will create a file called `exported_scss_vars.json` at the project root
 * that will contain all the scss variables name/value pairs our _variables.scss file.
 * Names are converted to camel case.
 *
 * This is run automatically by before parcel by the npm 'dev' and 'build' scripts.
 * You can run it manually with `npm run export:scss:vars`
 */

const fs = require('fs');
const postcss = require('postcss');
const postcss_scss = require('postcss-scss');
const postcss_export_vars = require('postcss-export-vars');

fs.readFile('src/styles/_variables.scss', (err, css) => {
  postcss([postcss_export_vars({ file: 'exported_scss_vars' })])
    .process(css, {
      from: 'src/styles/_variables.scss',
      syntax: postcss_scss,
      parser: postcss_scss,
    })
    .then(() => {
      // Update file to parse maps correctly
      const content = fs.readFileSync('exported_scss_vars.json', 'utf8');
      const result = JSON.parse(content);
      Object.entries(result).forEach(([k, v]) => {
        // Fix entries of scss maps
        if (v.startsWith('(')) {
          const params = v
            .replaceAll(/\s/g, '')
            .replaceAll('!default', '')
            .replaceAll(/[()]/g, '')
            .split(',')
            .filter(Boolean)
            .map((param) => param.split(':'));
          const next = Object.fromEntries(params);
          result[k] = next;
        }
      });
      fs.writeFileSync(
        'exported_scss_vars.json',
        JSON.stringify(result, null, 2),
        'utf8'
      );
    });
});
