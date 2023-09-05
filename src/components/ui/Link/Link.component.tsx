import { Color } from '@/config/theme';
import React, { memo } from 'react';
import { Wrapper } from '../Wrapper/Wrapper.component';

type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
    /**
     * Content of the button
     */
    children: string | React.ReactNode;
    /**
     * Icon of the button
     */
    icon?: React.ReactNode;
    /**
     * External link of the button
     */
    href?: string;
    /**
     * Custom style
     */
    style?: React.CSSProperties;
};

export const Link = memo<LinkProps>(props => {
    const { children, icon, href, style } = props;

    return (
        <Wrapper gap="XS">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'underline', color: Color.TERTIARY, ...style }}
            >
                {children}
            </a>
            {icon}
        </Wrapper>
    );
});

export default Link;
