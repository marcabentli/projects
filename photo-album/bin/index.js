#!/usr/bin/env node
const program = require('commander');

const {
    getPhotos
} = require('./photos');

program
    .version('1.0.0')
    .description('Photo Album');


program
    .command('photo-album <albumid>')
    .alias('-')
    .description('Choose an album')
    .action(albumid => getPhotos(albumid));


program.parse(process.argv);