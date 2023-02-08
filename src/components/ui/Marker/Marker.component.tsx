import { FontVariant, FontWeight, Spacing, Color } from '@/config/theme';
import React, { memo } from 'react';

interface MarkerProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Content of the typography
     */
    children: string | React.ReactNode;
    /**
     * Variant of the typography
     */
    variant?: keyof typeof FontVariant;
    /**
     * Weight of the typography
     */
    weight?: FontWeight;
    /**
     * Color of the typography
     */
    color?: string;
    /**
     * Callback function to be called when the typography is clicked
     */
    onClick?: () => void;
}

export const Marker = memo<MarkerProps>(props => {
    const { children, variant = 'BODY1', weight = FontWeight.REGULAR, color = Color.PRIMARY, onClick, ...rest } = props;

    return (
        <span
            onClick={onClick}
            style={{ ...FontVariant[variant], color: color, fontWeight: weight, marginRight: Spacing.SM }}
            {...rest}
        >
            <span style={{ color: color }}>[</span> guest <span style={{ color: color }}>]</span> {children}
        </span>
    );
});

export default Marker;
