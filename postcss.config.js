/**
 * This gets picked up by parcel, the first 2 plugins are included by default,
 * we are overriding plugings to add the 3rd, to export scss vars to js.
 * NOTE: Sometimes I had to delete parcels `.cache` for it to see changes in this file.
 */
const autoprefixer = require('autoprefixer');
const postcss_nested = require('postcss-nested');
const postcss_export_vars = require('postcss-export-vars');

module.exports = {
  plugins: [autoprefixer, postcss_nested, postcss_export_vars],
};
