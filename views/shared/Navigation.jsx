import Logo from '../../assets/vectors/Logo';
import Menu from '../../assets/vectors/Menu';
import Settings from '../../assets/vectors/Settings';
import styles from '../../styles/navigation/Default.module.css';
import Link from 'next/link';

export default function Navigation({
  setIsMenu,
  setIsSettings,
}) {
  return (
    <header className={styles.container}>
      <Link to='/' href='/' passHref>
        <Logo />
      </Link>

      <div className={styles.nav}>
        <div
          onClick={() => setIsSettings(true)}
          className={styles.settings_wrapper}>
          <Settings />
        </div>
        <div onClick={() => setIsMenu(true)} className={styles.menu_wrapper}>
          <Menu />
        </div>
      </div>
    </header>
  );
}
