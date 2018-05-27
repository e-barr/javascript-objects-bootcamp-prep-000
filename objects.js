var playlist = { 'Maroon 5' : 'This Love' }

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}