import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const currentTimeButThrottled = throttle(data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}, 1000);
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
player.on('timeupdate', function (data) {
  currentTimeButThrottled(data);
});
player
  .setCurrentTime(parsedTime.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
