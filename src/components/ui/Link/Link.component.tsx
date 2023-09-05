import React, { memo } from 'react';

type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
    /**
     * Content of the button
     */
    children: string | React.ReactNode;
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
    const { children, href, style } = props;

    return (
        <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', ...style }}>
            {children}
        </a>
    );
});

export default Link;
