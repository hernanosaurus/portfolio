import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';

export default memo(function Skills() {
    return (
        <>
            <Default inputVal="skills" color={Color.SECONDARY} />

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST} block>
                    Languages:&nbsp;
                    <Typography color={Color.PRIMARY}>HTML, Javascript (ES6+), (S)CSS/SASS, Typescript.</Typography>
                </Typography>
                <Typography variant="BODY1" color={Color.CONTRAST} block>
                    Libraries and Framework:&nbsp;
                    <Typography color={Color.PRIMARY}>
                        React, Redux, Angular, Vue, Jquery, GSAP, styled-components, React Bootstrap, Material UI,
                        Bootstrap. 4, Tailwind CSS
                    </Typography>
                </Typography>
                <Typography variant="BODY1" color={Color.CONTRAST} block>
                    Tools:&nbsp;
                    <Typography color={Color.PRIMARY}>
                        VS Code, Git, Jira, Trello, Figma, Adobe Photoshop, Adobe Illustrator.
                    </Typography>
                </Typography>
            </div>
        </>
    );
});
