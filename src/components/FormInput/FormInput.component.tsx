import React, { CSSProperties, memo } from 'react';
import { FontVariant, FontWeight, Color } from '@/config/theme';
import Marker from '@/components/ui/Marker/Marker.component';

type FormInputProps = React.HTMLAttributes<HTMLInputElement> & {
    /**
     * Function to submit the form
     */
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    /**
     * Value of the input
     */
    value: string;
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
     * Focus on the input
     */
    focus?: boolean;
    /**
     * Ref to the scroll endpoint
     */
    scrollendpoint?: React.RefObject<HTMLDivElement>;
    /**
     * Style of the typography
     */
    style?: CSSProperties;
};

export const FormInput = memo<FormInputProps>(props => {
    const {
        submit,
        value,
        variant = 'BODY1',
        weight = FontWeight.REGULAR,
        color = Color.PRIMARY,
        focus = false,
        style,
        ...rest
    } = props;

    return (
        <form onSubmit={submit}>
            <Marker color={Color.PRIMARY}>
                <span style={{ color: Color.CONTRAST }}>~</span>
            </Marker>
            <input
                value={value}
                autoFocus={focus}
                style={{ ...FontVariant[variant], color: color, fontWeight: weight, ...style }}
                {...rest}
            />
        </form>
    );
});

export default FormInput;
