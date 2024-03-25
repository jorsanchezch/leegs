import '../styles/globals.scss';

import { useEffect } from 'react';
import { SCREENS } from '../constants.ts';

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
  
  return <Component {...pageProps} />
}
