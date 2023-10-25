import styles from '../src/app/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
function Header(){
    return(
        <div className={styles.header}>
            <div>
                <Image className={styles.logo} src={logo} width={180} height={60}/>
            </div>
            <div className={styles.navbar}>
                <Link className = {styles.links} href="/">
                    Home
                </Link>
                <Link className = {styles.links} href="/About">
                    About
                </Link>
                <Link className = {styles.links} href="/Contact">
                    Contact
                </Link>
                <Link className = {styles.links} href="/Login">
                    Login
                </Link>
            </div>
        {/* <h1 className={styles.h} >Header</h1> */}
        </div>
    )
}
export default Header
