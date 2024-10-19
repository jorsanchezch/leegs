import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/modules/Header.module.scss';
import OffsideMenu from './offside-menu';
import ProfileButton from './profile-button';

export default function Header() {

  return (
      <div className={`bar ${styles.nav}`}>
        <ProfileButton/>
        <Link className={`${styles.logo_link}`} href='/home'>
          <h6 className={`logo`}>
              {process.env.NEXT_PUBLIC_APP_NAME}
          </h6>
        </Link>
        <OffsideMenu/>
      </div>
  );
}


