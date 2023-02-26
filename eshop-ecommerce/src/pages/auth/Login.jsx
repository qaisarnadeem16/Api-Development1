import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Card } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/loader/Loader'
import {auth} from '../../firebase/config'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const Login = () => {
  const [email , SetEmail] =useState("");
  const [password , SetPassword] =useState("");
  const [isLoading , setIsLoading] =useState(false);
  const navigate=useNavigate();


  const loginUser=(e)=>{
    e.preventDefault(); 
     setIsLoading(true);

     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    const user = userCredential.user;
    setIsLoading(false);
    toast.success('Successfully Login....');
    navigate("/");
  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
    // ..
  });
  }

  //signInWithGoogle

  const provider = new GoogleAuthProvider();
  const signInWithGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    toast.success('Successfully Login....');
    navigate("/");
    // ...
  }).catch((error) => {
    toast.error(error.message);
  });
  }
  return (
    <>
    
   <ToastContainer />
   {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card className='shadow'>
          <div className={styles.form}>
            <h2>Login</h2>

            <form  onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>SetEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>SetPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}   >
              <Google color="#fff" /> Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/Register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
      </>
  )
}

export default Login
