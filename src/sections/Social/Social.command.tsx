import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { GITHUB_URL, LINKEDIN_URL } from '@/config/config';
import { Spacing, Color } from '@/config/theme';

export default memo(function Social() {
    return (
        <>
            <div style={{ margin: Spacing.MD }}>
                <Typography block>
                    type / click&nbsp;
                    <a
                        style={{ color: Color.TERTIARY, textDecoration: 'underline' }}
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        'github'
                    </a>
                    &nbsp;or&nbsp;
                    <a
                        style={{ color: Color.TERTIARY, textDecoration: 'underline' }}
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        'linkedin'
                    </a>
                </Typography>
            </div>
        </>
    );
});
