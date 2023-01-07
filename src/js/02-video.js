import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (timeupdate) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeupdate.seconds)
    );
  }, 1000)
);

let currTime;
if (localStorage.getItem('videoplayer-current-time')) {
  currTime = localStorage.getItem('videoplayer-current-time');
} else {
  currTime = 0.5;
}

player.setCurrentTime(currTime);
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
