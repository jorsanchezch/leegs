import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import styles from 'styles/modules/Offside.module.scss';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href: string;
}

interface OffsideMenuProps {
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];
  

const OffsideMenu: React.FC<OffsideMenuProps> = ({ menuItems = defaultMenuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="button secondary p-3"
      >
        <Menu className='secondary' size={24} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`${styles.menu} fixed flex items-center top-0 right-0 h-full w-1/2 md:w-1/3 bg-primary 
          shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? '-translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="px-4 w-full link-list">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className='py-4'>
                <Link href={item.href} className='block w-full hover:underline'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default OffsideMenu;