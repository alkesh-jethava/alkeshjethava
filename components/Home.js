import Image from 'next/image';
import styles from '../styles/Home.module.css'

import ResumeButton from './ResumeButton'
// import HomeIllustration from "../public/home.svg";


const Home = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <h1>Alkesh Jethava</h1>
                <ResumeButton/>
            </div>
            <div className={styles.bodyWrapper}>
                <Image src="/home.svg" height="600" width="600" />
                <h1>Hello,<br/> I am React Native Developer!</h1>
            </div>
        </section>
    )
}

export default Home;