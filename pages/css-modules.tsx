import type { NextPage } from 'next';
import styles from '../styles/styles.module.css';

const CssModules: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This is using CSS modules</h1>
    </div>
  );
};

export default CssModules;
