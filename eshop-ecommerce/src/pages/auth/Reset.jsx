import React, { useState } from 'react'

import styles from './auth.module.scss'
import forgetImg from '../../assets/forgot.png'
import { Link } from 'react-router-dom'
import { Card } from '@mui/material'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'
const Reset = () => {

  const [email , SetEmail] =useState("");
  const [isLoading , setIsLoading] =useState(false);



  const resetPassword=(e)=>{
    e.preventDefault(); 
     setIsLoading(true);
     sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false);
    toast.success('Successfully Send Reset Password Link....');

  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
    // ..
  });
  }
  return (
   <>
   {isLoading && <Loader/>}

   <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={forgetImg} alt="Reset Password" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>

            <form >
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>SetEmail(e.target.value)}
              />

              <button type="submit" className="--btn --btn-primary --btn-block" onClick={resetPassword}>
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to="/Login">- Login</Link>
                </p>
                <p>
                  <Link to="/Register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
   </>
  )
}

export default Reset
