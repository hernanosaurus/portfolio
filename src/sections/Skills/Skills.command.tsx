import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';

export default memo(function Skills() {
    return (
        <>
            <Default inputVal="skills" color={Color.SECONDARY} />

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    Languages:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>HTML, Javascript (ES6+), (S)CSS/SASS, Typescript.</span>
                </Typography>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    Libraries and Framework:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        React, Redux, Angular, Vue, Jquery, GSAP, styled-components, React Bootstrap, Material UI,
                        Bootstrap. 4, Tailwind CSS
                    </span>
                </Typography>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    Tools:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        VS Code, Git, Jira, Trello, Figma, Adobe Photoshop, Adobe Illustrator.
                    </span>
                </Typography>
            </div>
        </>
    );
});
