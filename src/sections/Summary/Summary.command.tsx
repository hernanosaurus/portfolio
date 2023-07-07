import { memo } from 'react';
import { Projects, Skills, Social, About, Contact } from '../index';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing } from '@/config/theme';

export default memo(function Summary() {
    return (
        <div style={{ margin: Spacing.MD }}>
            <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                IAM.
            </Typography>
            <About />
            <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                PROJECTS.
            </Typography>
            <Projects />
            <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                SKILLS.
            </Typography>
            <Skills />
            <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                SOCIAL.
            </Typography>
            <Social />
            <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                CONTACT.
            </Typography>
            <Contact />
        </div>
    );
});
