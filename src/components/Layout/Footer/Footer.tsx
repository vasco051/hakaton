import {Link} from "react-router-dom";

import {staticLinks} from "routes/routingLinks.ts";

import IcLogo from "assets/images/global/logo_pink.svg"; // todo
import styles from './styles.module.scss'

export const Footer = () => {
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