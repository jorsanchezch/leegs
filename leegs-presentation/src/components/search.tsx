import * as React from 'react';
import { Search } from 'lucide-react';


export default function SearchInput() {

  return (
    <div className={`flex box secondary px-4`}>
        <div className='icon-wrapper'>
            <Search  />
        </div>
        <input
            placeholder="Search…"
            aria-label='Search'
            className={`w-full easeOut default`}
        >
          </input>
    </div>
  );
}
