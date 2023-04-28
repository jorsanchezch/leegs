import styles from '../styles/Layout.module.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
    return (
    <>
        <main className={`${styles.main} ${inter.className}`}>
            {children}
        </main>
    </>
    );
}