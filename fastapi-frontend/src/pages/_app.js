import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from '../context/GlobalState';
import styles from '../styles/global.module.css';
import { socket } from '../socket';

function MyApp({ Component, pageProps }) {
  console.log(socket);
  console.log('fired');
  console.log(socket.connected);
  return (
    <GlobalStateProvider>
      
      <div><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
}
export default MyApp;
