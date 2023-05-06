import { results, TypeResult } from '../../Utilities/data';

import styles from './Summary.module.scss';

const Summary = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Summary</div>
            <div className={styles.scoreList}>
                {results.map((result: TypeResult, index: number) => (
                    <div
                        className={styles.listElement}
                        key={index}>
                        <div className={styles.iconContainer}>
                            <img src={result.icon} alt={result.category} />
                        </div>
                        <div className={styles.resultCategory}>{result.category}</div>
                        <div className={styles.resultScore}>
                            <span>{result.score} </span>
                            <span>&nbsp;/ 100</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.continueButton}>Continue</div>
        </div>
    )
}

export default Summary;