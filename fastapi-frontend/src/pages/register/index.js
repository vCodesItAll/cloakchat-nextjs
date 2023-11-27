import React, { useEffect, useState,} from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import styles from './register.module.css';
import { jwtDecode } from "jwt-decode";
import Link from 'next/link';
//------------------------------------------------------------------------------------------------------------------------------
function RegisterPage() {
  const {state, dispatch} = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    email: "",
    username: "",
  });
//------------------------------------------------------------------------------------------------------------------------------
  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
//------------------------------------------------------------------------------------------------------------------------------
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const resp = await AuthService.register(user);
      
      if (resp.data.access_token) {
        //let data = jwtDecode(resp.access_token);
        let data = jwtDecode(resp.data.access_token, { header: true });
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
  
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
//------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div className={styles.container}>
        <h1>Register</h1>
      <div className="flex">
        <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
          
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="email">Email:</label><br></br>
            <input
              className="border"
              type="text"
              id="email"
              required
              onChange={(e) => {
                let olduser = user;
                olduser.email = e.target.value;
                olduser.username = e.target.value;
                setUser(olduser);
              }}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="password">Password:</label><br></br>
            <input
              className="border"
              type="password"
              id="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="passwordConf">Confirm Password:</label><br></br>
            <input
              className="border"
              type="password"
              id="passwordConf"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Register!"
              className={styles.button}
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.email
                  ? false
                  : true
              }
            />
          </div>
        </form>
        <Link href="/login" className={styles.link}>
            Login Here
        </Link>
      </div>
    </div>
    </div>
  );
}

export default RegisterPage;