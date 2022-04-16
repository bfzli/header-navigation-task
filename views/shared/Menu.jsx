import About from '../../assets/vectors/About';
import Close from '../../assets/vectors/Close';
import Contact from '../../assets/vectors/Contact';
import Home from '../../assets/vectors/Home';
import Services from '../../assets/vectors/Services';
import styles from '../../styles/navigation/Menu.module.css';

export default function Menu({ setIsMenu, t }) {
  return (
    <section className={styles.container}>
      <section className={styles.overlay} onClick={() => setIsMenu(false)} />

      <section className={styles.modal}>
        <section className={styles.header}>
          <p className={styles.title}>{t.header.title}</p>

          <div
            className={styles.close_wrapper}
            onClick={() => setIsMenu(false)}>
            <Close />
          </div>
        </section>
        <section className={styles.body}>
          <div className={styles.link_wrapper}>
            <Home />
            <p className={styles.link_text}>{t.header.home}</p>
          </div>

          <div className={styles.link_wrapper}>
            <Services />
            <p className={styles.link_text}>{t.header.services}</p>
          </div>

          <div className={styles.link_wrapper}>
            <About />
            <p className={styles.link_text}>{t.header.about}</p>
          </div>

          <div className={styles.link_wrapper}>
            <Contact />
            <p className={styles.link_text}>{t.header.contact}</p>
          </div>
        </section>
      </section>
    </section>
  );
}
