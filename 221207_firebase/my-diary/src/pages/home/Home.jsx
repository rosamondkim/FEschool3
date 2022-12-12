import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
    const { user } = useAuthContext();
    const {documents,error} = useCollection('');
    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid={user.uid} />
            </aside>
            <ul className={styles.content_list}>
                {error&&<strong>{error}</strong>}
                {document&& <DiaryList diaries={documets}/>}
            </ul>

        </main>
    )
}