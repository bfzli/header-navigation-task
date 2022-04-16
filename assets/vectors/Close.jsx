import styles from '../../styles/shared/Icons.module.css';

export default function Close() {
  return (
    <svg
      className={styles.close_icon}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.9952 1.00714L1.00854 16.9905'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 17L1 1'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
