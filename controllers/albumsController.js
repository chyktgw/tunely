/************
 * DATABASE *
 ************/


var db = require('../models');
/* hard-coded data */
// GET /api/albums
function index(req, res) {
  // FILL ME IN !
  db.Album.find({}, function(err, allAlbums) {
    res.json(allAlbums);
  });
}



function create(req, res) {
  // FILL ME IN !
  var newAlbum = new Album({
  album: req.body.name,
  artistName: req.body.artistName,
  releaseDate: req.body.releaseDate,
  genres: req.body.genres
});
}



function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
