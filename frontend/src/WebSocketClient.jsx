import { useEffect } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
// import { add_to_saved_data } from '../redux/slices/GlobalDataSlice';


export default function WebSocketClient() {
  useEffect(() => {

    window.Pusher = Pusher;
    window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 8080,
    // wssPort: 8080,
    // enabledTransports: ['ws', 'wss'],

    forceTLS: false,
    disableStats: false,
    });

    window.Echo.channel('click_channel')
    .listen('.click-event', (e) => {
    console.log('Clicked at:', e.row, e.col, 'by:', e.username);
    });

    return () => {
      window.Echo.leaveChannel('click_channel');
    };
  }, []);


  return (
   ''
  );
}
