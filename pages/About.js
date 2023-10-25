import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../src/app/Header.module.css'
import Image from 'next/image'
import about from '../public/about.png'
function About(){
    return(
        <div>
            <Header/>
            <div className = {styles.aboutContent}>
                    <Image src={about} />
                    <div className= {styles.aboutdesc}>
                        <div className= {styles.abouthead}>
                            <h1>WELCOME TO <span>FITME</span></h1>
                            <p>Keep your body fit and strong</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at viverra lorem. Sed volutpat justo eget eleifend hendrerit. Cras vitae porta quam, in malesuada erat. Praesent laoreet eget nunc vel tincidunt. Sed at diam ornare, maximus massa sit amet, pellentesque nisl. Pellentesque elit ante, elementum a est quis, mattis commodo neque. Nullam purus risus, sagittis quis urna molestie, facilisis vestibulum tellus. Nullam convallis finibus molestie. Curabitur efficitur magna sagittis faucibus sodales. Vestibulum at eleifend elit, id hendrerit tellus. Fusce dolor massa, tincidunt vitae finibus ac, placerat sed diam. Donec tempor aliquam libero ac luctus. Aenean eu nulla ac risus aliquet molestie non a nibh. Pellentesque at nisl posuere, imperdiet nisi id, accumsan enim.

Nam non leo accumsan, auctor arcu id, ultrices urna. Ut gravida congue ex et varius. Vivamus blandit sit amet dolor porttitor aliquam. Donec maximus at libero sed tristique. Mauris ullamcorper nisi et varius pretium. Sed vel consequat neque. In hendrerit mi id elementum accumsan. Sed non laoreet nulla. Nullam dictum, dolor et placerat cursus, libero turpis ullamcorper felis, nec consequat risus dui in magna.</p>
                    </div>
                    
                    
            </div>
            <Footer/>
        </div>
    )
}
export default About