import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';

export default memo(function Contact() {
    return (
        <>
            <Default inputVal="contact" color={Color.SECONDARY} />

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.PRIMARY} style={{ marginBottom: Spacing.SM }}>
                    Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities
                    to be part of your visions.
                </Typography>

                <Typography variant="BODY1" color={Color.PRIMARY}>
                    type / click&nbsp;
                    <a
                        href="mailto:hernanterania@gmail.com"
                        id="mailto-btn"
                        style={{ color: Color.TERTIARY, textDecoration: 'underline' }}
                    >
                        email
                    </a>
                </Typography>
            </div>
        </>
    );
});
