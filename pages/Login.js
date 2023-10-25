import React, {useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useRouter} from 'next/router'
import styles from '../src/app/Header.module.css'

function Login(){
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const router = useRouter()

    const handlelogin = e => {
        e.preventDefault();
        console.log(e.target.value);
        if(email == 'kratikadubey40@gmail.com'){
            alert('Logged in as Kratika')
            router.push('/')

        }
        else{
            alert('No such username found')
        }

      };
    return(
        <>
        <Header/>
        <div className={styles.login}>

            <h1 className={styles.loginform}>Login</h1>

            <div >
                <form className={styles.loginform}>
                    <label>Email / Username </label>
                    <input className={styles.loginformcontrol} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Password </label>
                    <input className={styles.loginformcontrol} type="password"></input>
                    <button className={styles.btn} onClick= {handlelogin}> Login </button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login