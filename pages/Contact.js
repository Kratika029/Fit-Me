import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../src/app/Header.module.css'
import Image from 'next/image'
import location from '../public/location.png'
import mail from '../public/email.png'
import call from '../public/phone-call.png'

function Contact(){
    return(
            <div>
                <Header/>
                <div className={styles.contact}>
                {/* </div> */}
                    <div className={styles.contcontainer}>

                        <div >
                            <h1 className={styles.contHead}>GET IN <span>TOUCH</span></h1>
                            <div className={styles.titlebdr}>
                                <div className={styles.titlebdrinside}>
                                 </div>
                            </div>
                            <p className={styles.contHead}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>


                        <div className={styles.contactinfo}>
                            <div className={styles.loc}>
                                <div className={styles.anglebox}>
                                <Image src={location} width={70} height={80}/>
                                {/* <i class={styles.famapmarker}  aria-hidden="true"></i> */}
                                <p>
                                    123 Butler National Road, USA
                                </p>
                                </div>
                            </div>
                            <div className={styles.loc}>
                            <div className={styles.anglebox}>
                                <Image src={mail} width={70} height={80}/>
                                {/* <i class={styles.famapmarker}  aria-hidden="true"></i> */}
                                <p>yourmail@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.loc}>
                            <div className={styles.anglebox}>
                                <Image src={call} width={70} height={80}/>
                                {/* <i class={styles.famapmarker}  aria-hidden="true"></i> */}
                                <p>+012 001 123 456</p>
                                </div>
                            </div>
                        </div>


                        <div className={styles.enquiry}>
                            <form>
                                <input className={styles.formcontrol} type = "text" placeholder='Full Name'></input>
                                <input className={styles.formcontrol} type = "email" placeholder='Email'></input>
                                <input className={styles.formcontrol} type = "text" placeholder='Contact number'></input>
                                <input className={styles.formcontrol} type="text" placeholder='Message'></input>
                            </form>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
            
        )
    
  }
    
  export default Contact