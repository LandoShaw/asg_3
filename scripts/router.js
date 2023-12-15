const data = require("./dataProvider.js");
const paintings = data.paintingsData;
const artists = data.artistsData;
const galleries = data.galleryData;

const handleAllPaintings = app => {
    app.get('/api/paintings', (req,resp) => { 
        resp.json(paintings) } );
};

const handleByPaintingId = app => {
    app.get('/api/painting/:id', (req,resp) => {
        const matches = paintings.filter( u => u.paintingID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "no painting for the ID provided"});
} );
};

const handleByGalleryId = app => {
    app.get('/api/painting/gallery/:id', (req,resp) => {
        const matches = paintings.filter( u => u.gallery.galleryID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "no painting found for gallery id given"});
} );
};

const handleByArtistId = app => {
    app.get('/api/painting/artist/:id', (req,resp) => {
        const matches = paintings.filter( u => u.artist.artistID == req.params.id);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "no painting found for artist id given"});
} );
};

const handleByYearMinMax = app => {
    app.get('/api/painting/year/:min/:max', (req,resp) => {
        const minYear = parseInt(req.params.min);
        const maxYear = parseInt(req.params.max);
        const matches = paintings.filter( u => u.yearOfWork >= minYear && u.yearOfWork <= maxYear);
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "no painting found for this year range"});
} );
};


const handleByTitle = app => {
    app.get('/api/painting/title/:text', (req,resp) => {
        const text = (req.params.text).toUpperCase();
        const matches = paintings.filter(u => ((u.title).toUpperCase()).includes(text));        
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "no painting found for title given"});
} );
};

const handleByColor = app => {
    app.get('/api/painting/color/:name', (req,resp) => {
        const color = (req.params.name).toUpperCase();
        const matches = paintings.filter((u) => {
            for (let c of u.details.annotation.dominantColors) {
                if (c.name.toUpperCase() == color) {
                    return true;
                }
            }
        });        
        if (matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "no painting found for color given given"});
} );
};

const handleByArtistAll = app => {
    app.get('/api/artists', (req,resp) => { resp.json(artists) } );
}

const handleByArtistCountry = app => {
    app.get('/api/artists/:country', (req, resp) => {
        const country = req.params.country;
        const matches = artists.filter(u => u.Nationality.toUpperCase() == country.toUpperCase());
        if (matches.length > 0) 
            resp.json(matches); 
        else 
            resp.json({"message": "no artist found for given country"}); 
    });
}

const handleByGalleryAll = app => {
    app.get('/api/galleries', (req,resp) => { resp.json(galleries) } ); 
}

const handleByGalleryCountry = app => {
    app.get('/api/galleries/:country', (req, resp) => {
        const country = req.params.country;
        const matches = galleries.filter(u => u.GalleryCountry.toUpperCase() == country.toUpperCase());
        if (matches.length > 0) 
            resp.json(matches); 
        else 
        resp.json({"message": "no gallery found for given country"}); 
    });
}

module.exports = {
    handleAllPaintings, 
    handleByPaintingId,
    handleByGalleryId,
    handleByArtistId,
    handleByYearMinMax,
    handleByTitle,
    handleByColor,
    handleByArtistAll,
    handleByArtistCountry,
    handleByGalleryAll,
    handleByGalleryCountry
};