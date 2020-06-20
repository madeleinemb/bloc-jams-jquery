{

  $('button#play-pause').on('click', function() {
    player.playPause();
     $(this).attr('playState', player.playState);
  });
      //player.playState == "paused" or "stopped" then next buttons no activity; on click, do nothing
      // on click the next button should go to the song index +1
      // if index+1 on song list doesn't exist, on click button does nothing

  $('button#next').on('click', function() { //why do I have to put 'button' here?
    if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex+1;
      const n = album.songs.length
    if (nextSongIndex >= n) { return; }

      const nextSong = album.songs[nextSongIndex];
      player.playPause(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex-1;
    if (previousSongIndex < 0) { return; }

      const previousSong = album.songs[previousSongIndex];
      player.playPause(previousSong);
  });

  $('#time-control input').on('input', function (event) {
  player.skipTo(event.target.value);
  });


  setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);


}
