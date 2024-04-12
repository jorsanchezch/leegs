import * as React from 'react';
import SearchInput from 'components/search';
import Link from 'next/link';
import styles from '../styles/modules/Header.module.scss';

export default function Header() {

  return (
      <div className='bar'>
        <Link href='/home'>
          <h6 className={`my-auto logo`}>
              {process.env.NEXT_PUBLIC_APP_NAME}
          </h6>
        </Link>
          <SearchInput />
      </div>
  );
}


