import Result from '../Result/Result';
import Summary from '../Summary/Summary';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Result />
      <Summary />
    </div>
  );
}

export default App;
