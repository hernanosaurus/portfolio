import React, { memo } from 'react';

type StackableProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

export const Stackable = memo<StackableProps>(props => {
    const { children, ...rest } = props;

    return (
        <div style={{ float: 'left', display: 'block', width: '100%', overflow: 'hidden' }} {...rest}>
            {children}
        </div>
    );
});
