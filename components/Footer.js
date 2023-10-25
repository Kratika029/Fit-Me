import styles from '../src/app/Header.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
         <div className={styles.footerCont}>
            <div className={styles.col1}>
                <h3>ABOUT US</h3>
                <p>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                </p>
                <div className="icons">

                </div>
            </div>
            <div className={styles.col1}>
                <h3>TAGS</h3>
                <div class="tag-group">
                            <a class={styles.tagBtn} href="#">WEB DESIGN</a>
                            <a class={styles.tagBtn} href="#">RESPONSIVE</a>
                            <a class={styles.tagBtn} href="#">PHP</a>
                            <a class={styles.tagBtn} href="#">JQUERY</a>
                            <a class={styles.tagBtn} href="#">JAVASCRIPT</a>
                            <a class={styles.tagBtn} href="#">ANIMATION</a>
                            <a class={styles.tagBtn} href="#">HTML</a>
                            <a class={styles.tagBtn} href="#">CSS</a>
                            <a class={styles.tagBtn} href="#">CSS3</a>
                </div>
                
            </div>
            <div className={styles.col1}>
                <h3>NEWSLETTER</h3>
                <input type='email' placeholder='Email'></input><br/>
                <br/>
                <a class={styles.tagBtn} href="#">SUBSCRIBE</a>
            </div>
            
         </div>
         <div className={styles.cr}>
         <p className={styles.cr}>Copyright @Kratika</p>
         </div>
         
        </div>
    )
}
export default Footer