$(document).on("ready", function(){
  loadDefaultTrends(event);
  $('form').on('submit', function(event){
    event.preventDefault();
    searchGif(event);

  });
  $('.btn-info').on('submit', random25);
          // area exclusively dedicated to function definitions

  function loadDefaultTrends(event){
    return $.ajax({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&offset=125',
      dataType: 'JSON',
      success: displayGif,
      error: errorLog
    });
  }

  function displayGif(gifs, status){
    $('img').remove();
    console.log(gifs);
    gifs.data.forEach(function(gif){
      $('.gif-gallery').append('<img src="' + gif.images.downsized.url + '"/>');
    });
  }
  function grabURLs(gifs, status){
    $('img').remove();
      var maap = gifs.data.map(function(gif){
      return 'img src="' + gif.images.downsized.url + '"></img>"';
    });


  }
  function random25(event){
    event.preventDefault()
    return $.ajax({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random',
      dataType: 'JSON',
      success: displayGif,
      error: errorLog,
      compelete: nailedIt
    });
  }

  function searchGif(event){
    // $('img').remove();
     return $.ajax({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?offset=100',
        dataType: 'JSON',
        data: $('form').serialize(),
        success: displayGif,
        error: errorLog

      });

  }
  function keyVault(key){
    keyChain.push(key);
  }
  function display25(keys){
    for(var i = 0; i < 25; i++){
    $('.gif-gallery').append(keys.shift());
  }
  }
  function nailedIt(){
    console.log('nailed it');
  }
  function errorLog(xhr, status, error){
    console.log(status, ' uh oh ', error);
  }

});
