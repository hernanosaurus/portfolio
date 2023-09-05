import { Spacing } from '@/config/theme';
import React, { memo } from 'react';

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
    direction?: 'row' | 'column';
    gap?: keyof typeof Spacing;
    children?: React.ReactNode;
};

export const Wrapper = memo<WrapperProps>(props => {
    const { direction = 'row', gap = 'SM', children, style, ...rest } = props;
    return (
        <div
            style={{
                display: 'flex',
                alignItems: direction === 'row' ? 'center' : 'flex-start',
                flexDirection: direction,
                gap: Spacing[gap],
                ...style,
            }}
            {...rest}
        >
            {children}
        </div>
    );
});
