var playlist = {
  artistName: 'song'
};
function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}
function removeFromPLaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
