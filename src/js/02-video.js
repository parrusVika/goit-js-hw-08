import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const lokalStorage = "videoplayer-current-time";
// const saveCurrentTime =

// player.on('timeupdate', throttle(saveCurrentTime, 1000));
player.on('timeupdate', throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds)
}, 1000)
);

// const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY)

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(function (error) {

    })



