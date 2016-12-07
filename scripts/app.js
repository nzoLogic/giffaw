$(document).on("ready", function(){
  loadDefaultTrends(event);
  $('form').on('submit', function(event){
    event.preventDefault();
    searchGif(event);
  });
});

function loadDefaultTrends(event){
  return $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    dataType: 'JSON',
    success: displayGif,
    error: errorLog
  });
}

function displayGif(gifs, status){
  $('img').remove();
  console.log('displayGif');
  gifs.data.forEach(function(gif){
    $('.gif-gallery').append('<img src="' + gif.images.downsized.url + '"/>');
  })
}

function searchGif(event){
  $('img').remove();
  return $.ajax({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      dataType: 'JSON',
      data: $('form').serialize(),
      success: displayGif,
      error: errorLog,

    });
}

function errorLog(xhr, status, error){
  console.log(status, ' uh oh ', error);
}
