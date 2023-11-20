import {Link, useLocation} from "react-router-dom";

import {staticLinks} from "routes/routingLinks.ts";

import IcLogo from "assets/icons/global/logo_pink.svg"; // todo
import styles from './styles.module.scss'

export const Footer = () => {
  const location = useLocation();

  const footerBanList = [
    staticLinks.authorization,
    staticLinks.registration
  ];

  if (footerBanList.includes(location.pathname)) return null

  return (
    <footer className={styles.footer}>
      <Link to={staticLinks.main} className={styles.logoWrapper}>
        <img src={IcLogo} className={styles.logo} alt=""/>
        <p className={styles.text}>Кибер-война</p>
      </Link>

      <p className={styles.text}>
        Хакатон | VDS
      </p>
    </footer>
  );
};