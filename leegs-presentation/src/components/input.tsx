import React from 'react';
import styles from 'styles/modules/Input.module.scss';
import FormElement, { FormElementProps } from './base/form-element';

export interface InputProps extends FormElementProps {

};

const Input: React.FC<InputProps> = ({
    type = 'text', 
    ...props 
}) => {

    return (
        <FormElement
            as='input'
            {...props}
            className={`mt-1 w-full ${styles.input} ${props.className}`}
        />
    );
};


export default Input;