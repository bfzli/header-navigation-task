import { useState, useTransition } from 'react';
import styles from '../styles/layouts/DefaultLayout.module.css';
import Navigation from '../views/shared/Navigation';
import Settings from '../views/shared/Settings';
import Menu from '../views/shared/Menu';
import View from './View';
import en from '../locales/en.json';
import sq from '../locales/sq.json';

export default function DefaultLayout({ children }) {
  const [theme, setTheme] = useState('lightmode');
  const [language, setLanguage] = useState('albanian');
  const [isMenu, setIsMenu] = useState(true);
  const [isSettings, setIsSettings] = useState(false);
  const [t, setT] = useState(null);

  useState(() => {
    switch (language) {
      case 'english':
        setT(en);
        break;
      default:
        setT(sq);
        break;
    }
  }, [language]);

  if (t === null) return <div>laoding</div>;
  else
    return (
      <main
        className={styles.container}
        id={theme === 'lightmode' ? 'lightmode' : 'darkmode'}>
        {isMenu && <Menu t={t} setIsMenu={setIsMenu} />}
        {isSettings && (
          <Settings
            t={t}
            setT={setT}
            en={en}
            sq={sq}
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
            isSettings={isSettings}
            setIsSettings={setIsSettings}
          />
        )}
        <Navigation
          t={t}
          setIsMenu={setIsMenu}
          setIsSettings={setIsSettings}
        />
        <View t={t} language={language}>
          {children}
        </View>
      </main>
    );
}
