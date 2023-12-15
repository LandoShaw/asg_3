const express = require('express');
const app = express();

const path = require('path');
app.use('/static', express.static(path.join(__dirname,'static')));

const router = require('./scripts/router.js');

router.handleAllPaintings(app);
router.handleByGalleryId(app);
router.handleByPaintingId(app);
router.handleByArtistId(app);
router.handleByYearMinMax(app);
router.handleByTitle(app);
router.handleByColor(app);
router.handleByArtistAll(app);
router.handleByArtistCountry(app);
router.handleByGalleryAll(app);
router.handleByGalleryCountry(app);

let port = 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
})
