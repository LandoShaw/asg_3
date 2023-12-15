const path = require('path');
const fs = require('fs');
// change data source to json file containing universities


const jsonPathPaintings = path.join(__dirname, '../', 'paintings-nested.json');
const jsonDataPaintings = fs.readFileSync(jsonPathPaintings, 'utf8');
const paintingsData = JSON.parse(jsonDataPaintings);

const jsonPathArtists = path.join(__dirname, '../', 'artists.json');
const jsonDataArtists = fs.readFileSync(jsonPathArtists, 'utf8');
const artistsData = JSON.parse(jsonDataArtists);

const jsonPathGallery = path.join(__dirname, '../', 'galleries.json');
const jsonDataGallery = fs.readFileSync(jsonPathGallery, 'utf8');
const galleryData = JSON.parse(jsonDataGallery);

module.exports = {paintingsData, galleryData, artistsData}; 