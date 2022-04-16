import styles from '../styles/layouts/View.module.css';

export default function View({ children }) {
  return <section className={styles.container}>{children}</section>;
}
