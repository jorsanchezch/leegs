import React, { useState, useRef, useEffect, cloneElement, ReactElement } from 'react';
import styles from 'styles/modules/Select.module.scss';

interface MenuItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: ReactElement;
  menu: MenuItem[];
  align?: 'left' | 'right';
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, menu, align = 'left' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {cloneElement(trigger, {
        onClick: toggleDropdown,
        'aria-expanded': isOpen,
        'aria-haspopup': true,
      })}

      {isOpen && (
        <div 
        className={`absolute ${align}-0 ${styles.dropdown}`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block ${styles.option}`}
                role="menuitem"
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;