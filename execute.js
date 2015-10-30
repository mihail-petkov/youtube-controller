if (command === 'next-song') {
  var nextSongElement = document.getElementsByClassName('currently-playing')[0].nextElementSibling;
  if (nextSongElement == null) {
    document.getElementById('playlist-autoscroll-list')
      .getElementsByClassName('yt-uix-scroller-scroll-unit')[0].getElementsByTagName('a')[0].click();
  } else {
    nextSongElement.getElementsByTagName('a')[0].click();  
  }
} else if (command === 'previous-song') {
  var previousSongElement = document.getElementsByClassName('currently-playing')[0].previousElementSibling;
  if (previousSongElement == null) {
    var allSongsSize = document.getElementById('playlist-autoscroll-list').getElementsByClassName('yt-uix-scroller-scroll-unit').length;
    document.getElementById('playlist-autoscroll-list')
      .getElementsByClassName('yt-uix-scroller-scroll-unit')[allSongsSize-1].getElementsByTagName('a')[0].click();
  } else {
    previousSongElement.getElementsByTagName('a')[0].click();  
  }
} else if (command == 'play') {
  document.getElementById('movie_player').click()
}