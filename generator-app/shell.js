#!/usr/bin/env node
'use strict';
var shell = require('shelljs');
var ejs = require('ejs');
var program = require('commander');
const chalk = require('chalk');
shell.echo('Welcome to the Generator');

shell.echo(chalk.white.bold('Welcome to the Generator'));

program
	.version('0.1.0')
	.usage('[options] <name ...>')
	.option('-l, --list-pages', 'List Pages')
	.option('-c, --create-page [name]', 'Create Page [name]')
	.option('-r, --read-page [name]', 'Read Page [name]')
	.option('-u, --update-page [name]', 'Update Page [name]')
	.option('-d, --delete-page [name]', 'Delete Page [name]')
	.parse(process.argv);

console.log('You want to :');
shell.mkdir('pages/');

if (program.listPages) {
	console.log('  - List Page %s', program.listPages);
	shell.ls('/pages/*.js').forEach(function(file) {
		console.log('file %s', file);

	});
}
if (program.createPage) {
	console.log('  - Create Page %s', program.createPage);
	shell.mkdir('pages/' + program.createPage, program.createPage);
	shell.touch('pages/' + program.createPage + '/' + program.createPage + '.ejs');
}
if (program.readPage) {
	console.log('  - Read Page %s', program.readPage);
	shell.cat('pages/' + program.readPage + '/' + program.readPage + '.ejs');
}
if (program.updatePage) {
	console.log('  - Update Page %s', program.updatePage);
}
if (program.deletePage) {
	console.log('  - Delete page %s', program.deletePage);
	shell.rm('-rf', 'pages/' + program.deletePage + '/');
}