import React, { useState } from 'react';
import styles from 'styles/modules/Toggle.module.scss';
import { toSnakeCase } from 'utils';

interface ToggleProps {
  defaultState?: boolean;
  id?: string;
  name?: string;
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ defaultState = false, id, name, label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const defaultId = `is_${toSnakeCase(label)}`;

  return (
    <label className={styles.label}>
      <p>{label}</p>
      <div className={styles.toggle}>
        <input
          type="checkbox"
          id={id ?? defaultId}
          name={name ?? defaultId}
          checked={isChecked}
          onChange={handleChange}
          className={styles.checkbox}
        />
        <span className={styles.slider} />
      </div>
    </label>
  );
};

export default Toggle;
