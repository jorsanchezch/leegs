import * as React from 'react';
import SearchInput from 'components/search';
import Link from 'next/link';

export default function Header() {

  return (
      <div className='bar'>
        <Link href='/home'>
          <h6 className='my-auto'>
              {process.env.NEXT_PUBLIC_APP_NAME}
          </h6>
        </Link>
          <SearchInput />
      </div>
  );
}


