import styles from './style.module.css'

const Time = () => {

    return (
        <div className={styles.container}>
        <div className={styles.label_time}>{new Date().toLocaleTimeString()}</div>
        </div>
    )
}

export default Time;