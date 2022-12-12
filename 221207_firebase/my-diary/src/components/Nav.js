import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Nav() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <nav className={styles.nav}>
            <h1 className={styles.tit}>두근두근 비밀일기</h1>
            <ul className={styles.list_nav}>
                {!user &&
                    <>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/signup">회원가입</Link>
                        </li>
                    </>
                }
                {user &&
                    <li>
                        <strong>환영합니다! {user.displayName} 님!</strong>
                        <button type='button' onClick={logout}>로그아웃</button>
                    </li>
                }
            </ul>
        </nav>
    )
}