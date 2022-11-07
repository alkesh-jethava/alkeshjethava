import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <Link href="/">home</Link>
            <Link href="/resume">resume</Link>
            <Link href="/contact">contact</Link>
        </nav>
    )
}

export default Navbar;
