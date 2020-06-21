class Helper {

  playPauseAndUpdate(song) {
<<<<<<< HEAD
    player.playPause();
    $('#time-control .total-time').text( song.duration );
  }

=======
    player.playPause(song);
    const totalTime = player.getDuration();
    $('#time-control .total-time').text( player.prettyTime(totalTime) );
  }
>>>>>>> Assignment-18
}

const helper = new Helper();
