import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {clsx} from "clsx";

import {useAppDispatch, useAppSelector} from "hooks/redux.ts";

import {logout} from "store/reducers/account.slice.ts";
import {staticLinks} from "routes/routingLinks.ts";

import IcLogo from "assets/images/global/logo.svg";
import styles from './styles.module.scss'

export const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
	const [isVisible, setIsVisible] = useState<boolean>(true);

	const {user} = useAppSelector(state => state.accountReducer);
	const dispatch = useAppDispatch();

	const isAuth = !!user

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos: number = window.scrollY;
			const isScrollingDown: boolean = currentScrollPos > prevScrollPos;

			if (currentScrollPos >= 100) {
				setIsVisible(!isScrollingDown);
				setPrevScrollPos(currentScrollPos);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, isVisible]);

	const headerStyles: string = clsx(styles.header, {
		[styles.visible]: isVisible
	});

	return (
		<header className={headerStyles}>
			<div className={styles.headerWrapper}>
				<Link to={staticLinks.main} className={styles.logoWrapper}>
					<img src={IcLogo} className={styles.logo} alt=""/>
					<p className={styles.logoText}>Кибер-война</p>
				</Link>

				{isAuth ? (
					<button onClick={() => dispatch(logout())} className={styles.link}>
						Выйти
					</button>
				) : (
					<Link to={staticLinks.authorization} className={styles.link}>
						Войти
					</Link>
				)}
			</div>
		</header>
	);
};