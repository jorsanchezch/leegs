import * as React from 'react';
import {
  Select as MuiSelect,
} from '@mui/base/Select';
import { Option as MuiOption, OptionProps as MuiOptionProps } from '@mui/base/Option';
import { ChevronDown } from 'lucide-react';
import styles from 'styles/modules/Select.module.scss';

interface SelectProps {
  options: { value: any; label: string }[];
  defaultValue?: any;
}

const SelectButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { children, className, ...other } = props;
    return (
      <button ref={ref} type="button" className={`${styles.selectButton} select w-full ${className || ''}`} {...other}> 
        {children}
        <ChevronDown size={16} />
      </button>
    );
  }
);

const DropdownList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  (props, ref) => (
    <ul ref={ref} {...props} className={`${styles.dropdown} ${props.className || ''}`} />
  )
);

const Option = React.forwardRef<HTMLLIElement, MuiOptionProps<any>>(
  ({ value, className, children, ...props }, ref) => (
    <MuiOption ref={ref} value={value} className={`${styles.option} ${className || ''}`} {...props}>
      {children} 
    </MuiOption>
  )
);

export default function Select({ options, defaultValue, ...props }: SelectProps) {
  return (
    <MuiSelect
      defaultValue={defaultValue ?? options[0].value}
      slots={{
        root: SelectButton,
        listbox: DropdownList,
      }}
      {...props}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </MuiSelect>
  );
}
