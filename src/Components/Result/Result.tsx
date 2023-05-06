import styles from './Result.module.scss';

const Result = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Your Result</div>
            <div className={styles.score}>
                <span>76</span>
                <span>of 100</span>
            </div>
            <div className={styles.subTitle}>Great</div>
            <div className={styles.subText}>Your scored higher then 65% of the people who have taken these tests. </div>
        </div>
    )
}

export default Result;