import BottomNav from './mobile/bottom-nav.tsx'; 
import Header from './header.tsx';
import styles from '../styles/modules/Layout.module.scss';

export default function Layout({ children }) {
    return (
        <>
            <Header/>
                <main className={`${styles.main} h-full p-3`}>
                    {children}
                </main>
            <BottomNav/>
        </>
    );
}