import React from 'react';
import styles from 'styles/modules/Input.module.scss';
import FormElement, { FormElementProps } from './base/form-element';

export interface TextAreaProps extends FormElementProps {

};

const Textarea: React.FC<TextAreaProps> = ({
    type = 'text', 
    ...props 
}) => {

    return (
        <FormElement
            as='textarea'
            {...props}
            className={`mt-1 w-full ${styles.input} ${props.className}`}
        />
    );
};


export default Textarea;