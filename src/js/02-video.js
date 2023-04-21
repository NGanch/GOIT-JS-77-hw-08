
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const LOCALSTORAGE_KEY = 'videoplayer-current-time';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    player.on('timeupdate', throttle(onPlay, 1000));

     function onPlay(data){
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
    }

    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) ?? 0)

