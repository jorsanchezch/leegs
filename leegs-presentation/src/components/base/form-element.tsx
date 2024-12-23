import React from 'react';
import { toKebabCase, toCamelCase } from 'utils';

interface BaseFormElementProps extends FormElementProps {
  as: React.ComponentType<any> | 'input' | 'select' | 'textarea';
}

export interface FormElementProps {
  name?: string;
  label: string;
  type?: string;
  id?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  children?: React.ReactNode;
}

export const FormElement: React.FC<BaseFormElementProps> = ({
  as: Component = '',
  id, 
  name, 
  label,
  type = 'text',
  required = false,
  ...props
}) => {

  const defaultName = toCamelCase(label);
  const defaultId = toKebabCase(name ?? defaultName);

  return (
    <>
      <label className={props.labelClassName} htmlFor={name}>{label}</label>
      <Component
        id={id ?? defaultId}
        name={name ?? defaultName}
        value={''}
        type={type}
        required={required}
        {...props}
      >
        {props.children}
      </Component>
    </>
  );
};

export default FormElement;