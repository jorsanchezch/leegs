import React, { useState } from 'react';
import styles from 'styles/modules/Toggle.module.scss';

// Define the props interface
interface ToggleProps {
  isChecked?: boolean;
  id: string;
  name: string;
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ 
  isChecked = false, 
  id, 
  name, 
  label 
}) => {
  const [isCheckedState, setIsCheckedState] = useState<boolean>(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedState(event.target.checked);
  };

  return (
    <label className={styles.switch}>
      <input
        hidden
        type="checkbox"
        id={id}
        name={name}
        checked={isCheckedState}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <div className={styles.slider}></div>
    </label>
  );
};

export default Toggle;
