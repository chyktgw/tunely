/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

/* hard-coded data! */
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/albums').success(function (albums) {
    albums.forEach(function(album) {
      renderAlbum(album);
    });
  });


  //submit
  $('#albumForm').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log("formData", formData);
    $.post('/api/albums', formData, function(album) {
          renderAlbum(album);
    });
    $(this).trigger("reset");
  });

});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album', album);
  var albumHtml = $('#album-template').html();
  var albumTemplate = Handlebars.compile(albumHtml);
  var html = albumTemplate(album);
  $('#albums').prepend(html);
}
