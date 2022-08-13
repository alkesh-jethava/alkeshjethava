import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import styles from '../styles/mobileNavbar.module.css'

const MobileNavbar  = () => {

    const [open,setOpen] = useState(true)

    const handleMenu = () => {
        setOpen(prev=>!prev)
    }

    return (
        <div className={`${styles.wrapper}`}>
            {
                open ? 
                <Image src="/close.svg" height="35" width="35" onClick={handleMenu} />:
                <Image src="/menu.svg" height="35" width="35" onClick={handleMenu}/>
            }
            {
                open && 
                <>
                   <Link href="#aboutme">
                        <div className={styles.mobileLink} onClick={handleMenu}>
                        about me
                        </div>
                    </Link>
                    <Link href="#skills">
                        <div className={styles.mobileLink} onClick={handleMenu}>
                        skills
                        </div>
                    </Link>
                    <Link href="#experience">
                        <div className={styles.mobileLink} onClick={handleMenu}>
                        experience
                        </div>
                    </Link>
                    <Link href="#educationandlanguage" >
                        <div className={styles.mobileLink} onClick={handleMenu}>
                        education & language
                        </div>
                    </Link>
                    <Link href="#certification" >
                        <div className={styles.mobileLink} onClick={handleMenu}>
                        certifications
                        </div>
                </Link>
                </>
            }

        </div>
    )
}

export default MobileNavbar;