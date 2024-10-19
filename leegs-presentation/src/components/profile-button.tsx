import React from 'react';
import Dropdown from './dropdown';
import { ChevronDown } from 'lucide-react';

const ProfileButton: React.FC = () => {
  const menuItems = [
    { label: 'Edit', href: '#edit', onClick: () => console.log('Edit clicked') },
    { label: 'Duplicate', href: '#duplicate' },
    { label: 'Delete', href: '#delete', onClick: () => console.log('Delete clicked') },
  ];

  const trigger = (
    <button className="button secondary">
      Profile <ChevronDown size={16} />
    </button>
  );

  return <Dropdown trigger={trigger} menu={menuItems} align="left" />;
};

export default ProfileButton;