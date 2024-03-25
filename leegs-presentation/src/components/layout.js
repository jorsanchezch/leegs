import BottomNav from './mobile/bottom-nav.tsx'; 
import Header from './mobile/header.tsx';
import styles from '../styles/modules/Layout.module.scss';
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] });

export default function Layout({ children }) {
    return (
        <>
            <Header/>
                <main className={`${styles.main} ${rubik.className} h-full p-3`}>
                    {children}
                </main>
            <BottomNav/>
        </>
    );
}