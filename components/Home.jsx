import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className='content'>
            <div className={styles.homeContent}>
                <p className={styles.containerBrand}>alkesh jethava</p>
                    <TypeAnimation
                    sequence={[
                        'I Am Software Engineer', 
                        1500,
                        'I Am React Native Developer', 
                        1500,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1.3em' }}
                    />
            </div>
            
        </div>
    )
}

export default Home;
