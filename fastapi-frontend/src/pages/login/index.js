import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import AuthService from '../../services/auth.service';
import { jwtDecode } from "jwt-decode";
import styles from './login.module.css';
import Link from 'next/link';
//------------------------------------------------------------------------------------------------------------------------------
function LoginPage() {
    const router = useRouter();
    const { state, dispatch } = useGlobalState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//------------------------------------------------------------------------------------------------------------------------------
    const handleLogin = (e) => {
        e.preventDefault();
        const username = email;
        AuthService
            .login(username, password)
            .then(async (resp) => {
                if(resp != undefined){
                    if (resp.access_token) {
                        //let data = jwtDecode(resp.access_token);
                        let data = jwtDecode(resp.access_token, { header: true });
                        await dispatch({
                            type: 'SET_USER',
                            payload: data,
                        });
                        console.log('Login success');
                        router.push('/');
                    } else {
                        console.log('Login failed');
                        dispatch({ type: 'LOGOUT_USER' });
                    }
                }
            })
            .catch((error) => {
                // Handle the error here
                console.error('An error occurred:', error);
                // Optionally, dispatch a logout or error action
                dispatch({ type: 'LOGOUT_USER' });
            })
            .finally(() => {
                // Code to run regardless of success or failure
                console.log('Login request completed');
            });
    };
//------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <div className={styles.container}>
                <h1>Login</h1>
                <div className='flex'>
                    <form
                        onSubmit={handleLogin}
                        className='mx-auto my-auto border-2 bg-mtgray'
                    >
                        <div className='flex justify-between m-2 items-center space-x-2'>
                            <label htmlFor="email">Email:</label><br></br>
                            <input
                                className='border'
                                type="text"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex justify-between m-2 items-center space-x-2'>
                            <label htmlFor="pass">Password:</label><br></br>
                            <input
                                className='border'
                                type="password"
                                id="pass"
                                name="password"
                                minLength="8"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex'>
                            <input
                                className={styles.button}
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                    </form>
                    <Link href="/register" className={styles.link}>
                        Register Here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage