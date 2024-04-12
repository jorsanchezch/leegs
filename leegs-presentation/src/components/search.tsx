import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchInput() {

  return (
    <div className={`flex box secondary px-4`}>
        <div className='iconWrapper'>
            <SearchIcon  />
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
