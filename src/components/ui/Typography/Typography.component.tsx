import { FontVariant, FontWeight, Color, FontVariantType } from '@/config/theme';
import React, { CSSProperties, memo } from 'react';

type TypographyProps = React.HTMLAttributes<HTMLParagraphElement> & {
    /**
     * Content of the typography
     */
    children: string | React.ReactNode;
    /**
     * Variant of the typography
     */
    variant?: string;
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
     * Boolean to determine if typography should be blodk
     */
    block?: boolean;
    /**
     * Style of the typography
     */
    style?: CSSProperties;
};

export const Typography = memo<TypographyProps>(props => {
    const {
        children,
        variant = 'BODY1',
        weight = FontWeight.REGULAR,
        color = Color.PRIMARY,
        onClick,
        block,
        style,
        ...rest
    } = props;

    return (
        <span
            onClick={onClick}
            style={{
                ...FontVariant[variant as FontVariantType],
                color: color,
                fontWeight: weight,
                display: block ? 'block' : 'inline',
                ...style,
            }}
            {...rest}
        >
            {children}
        </span>
    );
});

export default Typography;
