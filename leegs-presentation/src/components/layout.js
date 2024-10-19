import BottomNav from './mobile/bottom-nav.tsx'; 
import Header from './header.tsx';
import styles from 'styles/modules/Layout.module.scss';

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <main className={`${styles.main} h-full pt-20`}>
                <div className='xl:max-w-screen-xl max-w-screen-md mx-auto p-6'>
                    {children}
                </div>
            </main>
        </>
    );
}