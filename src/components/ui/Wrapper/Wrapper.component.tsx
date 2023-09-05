import { Spacing } from '@/config/theme';
import React, { memo } from 'react';

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

export const Wrapper = memo<WrapperProps>(props => {
    const { children, style, ...rest } = props;
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.SM, ...style }} {...rest}>
            {children}
        </div>
    );
});
