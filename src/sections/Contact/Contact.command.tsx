import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';
import { MAIL_TO, RESUME_URL } from '@/config/config';

export default memo(function Contact() {
    return (
        <>
            <Default inputVal="contact" color={Color.SECONDARY} />

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.PRIMARY} block style={{ marginBottom: Spacing.SM }}>
                    Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities
                    to be part of something great.
                </Typography>

                <Typography variant="BODY1" color={Color.PRIMARY} block>
                    type / click&nbsp;
                    <a href={MAIL_TO} id="mailto-btn" style={{ color: Color.TERTIARY, textDecoration: 'underline' }}>
                        email
                    </a>
                    &nbsp;to send me a message, or click&nbsp;
                    <a href={RESUME_URL} id="mailto-btn" style={{ color: Color.TERTIARY, textDecoration: 'underline' }}>
                        here
                    </a>
                    &nbsp;download my resume.
                </Typography>
            </div>
        </>
    );
});
