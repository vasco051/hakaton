import IcLogo from "../../assets/images/global/logo.svg";
import {staticLinks} from "../../routes/routingLinks.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {clearUser} from "../../store/reducers/account.slice.ts";
import styles from './styles.module.scss'
const Header = () => {
    const { user } = useAppSelector(state => state.accountReducer);
    const dispatch = useAppDispatch()

    return (
        <header className={styles.header}>
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
        </header>
    );
};

export default Header;