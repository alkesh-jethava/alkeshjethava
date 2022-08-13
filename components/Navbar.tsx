import Link from 'next/link';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="#aboutme">
                <div className={styles.link}>
                about me
                </div>
            </Link>
            <Link href="#skills">
                <div className={styles.link}>
                skills
                </div>
            </Link>
            <Link href="#experience">
                <div className={styles.link}>
                experience
                </div>
            </Link>
            <Link href="#educationandlanguage" >
                <div className={styles.link}>
                education & language
                </div>
            </Link>
            <Link href="#certification" >
                <div className={styles.link}>
                certifications
                </div>
            </Link>
        </nav>
    )
}

export default Navbar;