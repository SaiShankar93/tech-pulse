import '../styles/App.css'
import { Date } from './Date'

const About = () => {
    return (
        <div className={styles.container} id = 'AboutUS'>
            <div className={styles.date_container}>
                <div className={styles.left_date} >
                    <Date day="28" month="October" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date} >
                    <Date day="31" month="October" subtxt="st" />
                </div>
            </div>
            <br />
            <div className={styles.timer_container}>
                    <h1 className={styles.title}>
                        It&#39;s Show<span>time</span>
                    </h1>
            </div>
        </div>
    )
}

export default About