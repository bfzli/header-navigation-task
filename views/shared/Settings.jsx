import Close from '../../assets/vectors/Close';
import styles from '../../styles/navigation/Settings.module.css';

export default function Settings({
  isSettings,
  setIsSettings,
  language,
  setLanguage,
  theme,
  setTheme,
  setT,
  en,
  sq,
  t,
}) {
  return (
    <section className={styles.container}>
      <section
        className={styles.overlay}
        onClick={() => setIsSettings(!isSettings)}
      />

      <section className={styles.modal}>
        <section className={styles.header}>
          <p className={styles.title}>{t.settings.title}</p>

          <div
            className={styles.close_wrapper}
            onClick={() => setIsSettings(!isSettings)}>
            <Close />
          </div>
        </section>
        <section className={styles.body}>
          <div className={styles.item}>
            <label className={styles.label}>{t.settings.language}</label>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);

                switch (language) {
                  case 'english':
                    setT(en);
                    break;
                  default:
                    setT(sq);
                    break;
                }
              }}
              className={styles.select}>
              <option value='english'>{t.settings.english}</option>
              <option value='albanian'>{t.settings.albanian}</option>
            </select>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>{t.settings.theme}</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className={styles.select}>
              <option value='lightmode'>{t.settings.lightmode}</option>
              <option value='darktmode'>{t.settings.darkmode}</option>
            </select>
          </div>
        </section>
      </section>
    </section>
  );
}
