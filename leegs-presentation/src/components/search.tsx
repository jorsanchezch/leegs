import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { SCREENS } from '../constants';

export default function SearchInput() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  }
  
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsMobileScreen(window.innerWidth < SCREENS.MD);
  });

  return (
    <div className={`flex ${(isExpanded || !isMobileScreen) ? 'iconContainer' : ''}`}>
        <div className='iconWrapper' onClick={isMobileScreen ? toggleExpansion : undefined}>
            <SearchIcon />
        </div>
        <input
            placeholder="Search…"
            aria-label='Search'
            className={`w-0 easeOut ${isExpanded ? 'w-full' : 'md:w-full'}`}
        >
          
          </input>
    </div>
  );
}
