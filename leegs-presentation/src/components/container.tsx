import React, { ReactNode } from 'react';

type FlexProps = {
    className?: string;
    children: ReactNode;
};

const Flex: React.FC<FlexContainerProps> = ({ className, children }) => {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    );
};

export default Flex;