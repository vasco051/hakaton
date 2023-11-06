import IcLogo from "../../assets/images/global/logo_pink.svg";
import {staticLinks} from "../../routes/routingLinks.ts";
import styles from './styles.module.scss'
export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <a href={staticLinks.main} className={styles.footerLogo}>
                <img src={IcLogo} className={styles.logo} alt=""/>
                <p className={styles.logoText}>Кибер-война</p>
            </a>
           <div className={styles.footerText}>
               <span>Хакатон</span> | <span className={styles.bold}>VDS</span>
           </div>
        </footer>
    );
};