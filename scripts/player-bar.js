{

  $('button#play-pause').on('click', function() {
    player.playPause();
     $(this).attr('playState', player.playState);
  });
      //player.playState == "paused" or "stopped" then next buttons no activity; on click, do nothing
      // on click the next button should go to the song index +1
      // if index+1 on song list doesn't exist, on click button does nothing

  $('#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex+1;
      const n = album.songs.length
    if (nextSongIndex >= n) { return; }

      const nextSong = album.songs[nextSongIndex];
      player.playPause(nextSong);
  });

  $('#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex-1;
    if (previousSongIndex < 0) { return; }

      const previousSong = album.songs[previousSongIndex];
      player.playPause(previousSong);
  });


}
