import {useEffect, useState} from "react";
import {clsx} from "clsx";

import IcLogo from "assets/images/global/logo.svg";
import {staticLinks} from "routes/routingLinks.ts";
import {useAppDispatch, useAppSelector} from "hooks/redux.ts";
import {clearUser} from "store/reducers/account.slice.ts";
import styles from './styles.module.scss'

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const { user } = useAppSelector(state => state.accountReducer);
    const dispatch = useAppDispatch()


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos: number = window.scrollY;
            const isScrollingDown: boolean = currentScrollPos > prevScrollPos;

            if (currentScrollPos >= 150) {
                setIsVisible(!isScrollingDown);
                setPrevScrollPos(currentScrollPos);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isVisible]);

    const headerStyles: string = clsx({
        [styles.header]: true,
        [styles.visible]: isVisible,

    });

    return (
        <header className={headerStyles}>
            <div className={styles.headerWrapper}>
                <a href={staticLinks.main} className={styles.logoWrapper}>
                    <img src={IcLogo} className={styles.logo} alt=""/>
                    <p className={styles.logoText}>Кибер-война</p>
                </a>
                {user!==null ?(<a onClick={()=>dispatch(clearUser())} className={styles.link}>Выйти</a>)
                    :
                    (<a href={staticLinks.authorization} className={styles.link}>
                        Войти
                    </a>)
                }
            </div>

        </header>
    );
};

export default Header;