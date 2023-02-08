import { FontVariant, FontWeight, Color } from '@/config/theme';
import React, { CSSProperties, memo } from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
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
    /**
     * Style of the typography
     */
    style?: CSSProperties;
}

export const Typography = memo<TypographyProps>(props => {
    const {
        children,
        variant = 'BODY1',
        weight = FontWeight.REGULAR,
        color = Color.PRIMARY,
        onClick,
        style,
        ...rest
    } = props;

    return (
        <p onClick={onClick} style={{ ...FontVariant[variant], color: color, fontWeight: weight, ...style }} {...rest}>
            {children}
        </p>
    );
});

export default Typography;
