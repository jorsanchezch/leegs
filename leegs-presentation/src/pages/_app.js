import 'styles/global.scss';
import { useEffect } from 'react';
import { SCREENS } from 'constants';
import { Josefin_Sans } from 'next/font/google'
import { Provider } from 'react-redux';
import { store } from 'store';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  
  // Inject env into css
  useEffect(() => {
    const setScreenSize = (breakpoint, size) => {
      document.documentElement.style.setProperty('--screen-' + breakpoint, size + 'px');
    };
    
    setScreenSize('sm', SCREENS.SM);
    setScreenSize('md', SCREENS.MD);
    setScreenSize('lg', SCREENS.LG);
    setScreenSize('xl', SCREENS.XL);
    setScreenSize('xl2', SCREENS.XL2);
    setScreenSize('xl3', SCREENS.XL3);
  }, []);
      
  return <Provider store={store}>
      <style jsx global>{`
      html {
        font-family: ${josefin.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </Provider>
}
