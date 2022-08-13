import styles from '../styles/Home.module.css'
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <MobileNavbar/>
            <div className={styles.homeContent}>
                <p className={styles.containerBrand}>alkesh jethava</p>
                <p className={styles.brandDescription}>React Native Developer</p>
            </div>
        </div>
    )
}

export default Home;
