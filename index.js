import Header from '../components/Header'
import Footer from '../components/Footer'
import banner from '../public/slider1.jpg'
import Image from 'next/image'
import styles from '../src/app/Header.module.css'
import feature1 from '../public/feature1.jpg'
import feature2 from '../public/feature2.jpg'
import feature3 from '../public/feature3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "../styles/Bootstrap.module.css";
import BootstrapCarousel from "./caraousels/Bootstrap";
function home(){
    return(


        <>
        <Header/>
        <div className={styles.banner}>
            <Image className={styles.bannerImg} src={banner} width={1300}/>
        </div>
        <div className={styles.features}>
            <div className={styles.card}>
                <Image className={styles.image} src={feature1} alt="img1" />
                <div className={styles.head}>
                    <h1>Weight Lifting</h1><br/>
                    <p className="nvis">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    
                </div>
            </div>
            <div className={styles.card}>
                <Image className={styles.image} src={feature2} alt="img2" />
                <div className={styles.head}>
                    <h1>Yoga Training</h1><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image className={styles.image} src={feature3} alt="img3" />
                <div className={styles.head}>
                    <h1>Crossfit Training</h1><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            
        </div>
        <div className={styles.courses}>
            <div className={styles.coursetitle}>
                <h1>OUR <span>COURSES</span></h1>
                <div className={styles.titlebdr}>
                    <div className={styles.titlebdrinside}>

                    </div>

                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.corousel}>
            <BootstrapCarousel />
            </div>
        
        </div>

        {/* contact */}
        <Footer/>

        </>
           
    )
}
    
export default home