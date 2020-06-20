class Helper {

  playPauseAndUpdate(song) {
    player.playPause();
    $('#time-control .total-time').text( song.duration );
  }

}

const helper = new Helper();
