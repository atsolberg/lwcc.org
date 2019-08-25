/* eslint-disable no-console */
const fs = require('fs');
const chalk = require('chalk');

const encoding = 'utf8';
const html_src = 'public/index.html';
const template_path = 'wp-stuff/react-template.php';
const template_top = `
<?php
/*
 * Template Name: React Page
 * Description: A template simply to use the react app to render the page.
 *
 */ ?>
 
`;

try {
  fs.unlinkSync(template_path);
} catch (e) {
  // Ignore error when file doesn't exist
  if (e.code !== 'ENOENT') {
    console.log('Could not delete file template file.', e);
  }
}

const html = fs.readFileSync(html_src, encoding);
const template = template_top + html;

fs.writeFileSync(template_path, template, encoding);

console.log(chalk.cyan('React WordPress template created successfully'));
