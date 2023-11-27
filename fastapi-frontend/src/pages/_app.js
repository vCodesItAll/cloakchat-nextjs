import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from '../context/GlobalState';
import styles from '../styles/global.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
}
export default MyApp;
