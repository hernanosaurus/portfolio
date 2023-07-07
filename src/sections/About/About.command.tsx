import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';

export default memo(function About() {
    return (
        <>
            <div style={{ margin: Spacing.MD }}>
                <Typography block style={{ marginBottom: Spacing.SM }}>
                    Hello!
                </Typography>

                <Typography block style={{ marginBottom: Spacing.SM }}>
                    A freelance <span style={{ color: Color.CONTRAST }}>Frontend Developer</span> based in the
                    Philippines.
                </Typography>

                <Typography block style={{ marginBottom: Spacing.SM }}>
                    For over a <span style={{ color: Color.CONTRAST }}>decade</span>, I have been working on a variety
                    of projects from small to large scale. Specializing in creative development I have worked with
                    clients from different industries and I am always looking for new challenges.
                </Typography>

                <Typography>
                    I enjoy technology and I do not prefer any specific tech stack or language. I{' '}
                    <span style={{ color: Color.CONTRAST }}>learn</span> and I&nbsp;
                    <span style={{ color: Color.CONTRAST }}>build</span> new things, whether that be&nbsp;
                    <span style={{ color: Color.CONTRAST }}>banners</span>,&nbsp;
                    <span style={{ color: Color.CONTRAST }}>website</span> or&nbsp;
                    <span style={{ color: Color.CONTRAST }}>web applications</span>. My aim will always be able to
                    produce great experiences.
                </Typography>
            </div>
        </>
    );
});
