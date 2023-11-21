import Nav from './navbar';
import styles from '../styles/Layout.module.css';
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
    return (
    <ThemeProvider>
        <main className={`${styles.main} ${inter.className}`}>
            <Nav/>
            {children}
        </main>
    </ThemeProvider>
    );
}