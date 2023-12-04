
import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState';
import { useRouter } from 'next/navigation';
import authService from '../services/auth.service';
import { jwtDecode } from "jwt-decode";
import styles from '../styles/home.module.css';
import Link from 'next/link';
// import { MessageInput } from '../components/message_component';
import MessageInput from '../components/message_component';
import { WEB_SOC_URL } from '@/services/auth.constants';


export default function Home() {
  const [ws] = useState(new WebSocket(WEB_SOC_URL));

  ws.onopen = (event) => {
    console.log('open')
  };


  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  
  const [message, setMessage] = useState('');
  // const sendMessage = async () => {
  //   try {
  //     // Make a POST request to your backend endpoint with the message
  //     const response = await axios.post('/api/messages', { message });

  //     // Handle success (e.g., show success message)
  //     console.log('Message sent successfully!', response.data);
  //   } catch (error) {
  //     // Handle errors (e.g., show error message)
  //     console.error('Error sending message:', error.message);
  //   }
  // };

  

    const sendMessage = () => {
      console.log('send', message);
      ws.send(message);
      ws.send({
        message: message,
        date: new Date(),
      });
    }
    ws.onmessage = (event) => {
      console.log(event.data);
    };
    


  const handleLogout = () => {
    authService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    router.push('/');
  };
  // MY COMPONENT THAT I WISH WOULD WORK
  return (
    <>
      {/* <main className={styles.main}>
        <div className={styles.grid}> */}
          {/* {state.user ? ( */}
            <>
              <MessageInput
                message={message}
                setMessage={setMessage}
                // onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={sendMessage}>Send Message</button>
              <li className="nav-item">
                <Link href="/" className={styles.logout} onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
            </>
          )
  {/* //         ) : (
  //           <li className="nav-item">
  //             <Link href="/login">Login</Link>
  //           </li>
  //         )}
  //       </div> */} 
  {/* //     </main> */}
    
  // );
  // const sendMessage = async () => {
  //   try {
  //     // Make a POST request to your backend endpoint with the message
  //     const response = await axios.post('/api/messages', { message });
      
  //     // Handle success (e.g., show success message)
  //     console.log('Message sent successfully!', response.data);
  //   } catch (error) {
  //     // Handle errors (e.g., show error message)
  //     console.error('Error sending message:', error.message);
  //   }
  // };


  // useEffect(() => {
  //   const getUserFromLocalStorage = () => {
  //     const userData = localStorage.getItem('user');
  //     if (userData) {
  //       const user = jwtDecode(userData);
  //       console.log('User data:', user);
  //       dispatch({
  //         type: 'SET_USER',
  //         payload: user
  //       });
  //     }
  //   };
  //   getUserFromLocalStorage();
  // }, []);

  

  // return (
  //   <>
  //     <main className={`${styles.main}`}>

  //       <div className={styles.grid}>
  //       {state.user ? (
  //         // put message component here
  //           <li className="nav-item">
  //             <Link href="/" className={styles.logout} onClick={handleLogout}>Logout</Link>
  //           </li>
  //         ) : (
  //           <li className="nav-item">
  //             <Link href="/login">Login</Link>
  //           </li>
  //         )}
  //       </div>
  //     </main>
  //   </>
  // )
}
