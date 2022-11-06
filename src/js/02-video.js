import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const playBackTime = "videoplayer-current-time"

player.on('timeupdate', throttle((function (data) {
    localStorage.setItem('playBackTime', JSON.stringify(data.seconds));
}), 1000));
