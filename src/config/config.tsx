import { DownloadIcon, ExternalLinkIcon, LinkIcon, MailIcon } from '@/assets/icons';
import Link from '@/components/ui/Link/Link.component';
import Typography from '@/components/ui/Typography/Typography.component';
import { Color } from './theme';
import { Wrapper } from '@/components/ui/Wrapper/Wrapper.component';

export enum COMMANDS {
    IAM = 'iam',
    PROJECTS = 'projects',
    SKILLS = 'skills',
    SOCIAL = 'social',
    CONTACT = 'contact',
    HOME = 'home',
    ALL = 'all',
    HELP = 'help',
    CLEAR = 'clear',
}

export const MAIL_TO = 'mailto:hterania.dev@gmail.com';
export const RESUME_URL = './hTerania.resume.freelance.2023.pdf';
export const GITHUB_URL = 'https://github.com/hernanosaurus';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/hernan-terania/';

export const SPARKLE_APP = 'https://sparkle.madgicx.com/';
export const MADGICX_APP = 'https://madgicx.com/';
export const AI_COPYWRITER_APP = 'https://ai-copywriter.com/';
export const W3BMINT_APP = 'https://w3bmint.io/';

export const Content = {
    home: {
        message: (
            <Wrapper direction="column">
                <Typography variant="H3" block>
                    Welcome! I am Hernan, a <span style={{ color: Color.CONTRAST }}>Keyboard for Hire</span>.
                </Typography>
                <Typography block>
                    Type <span style={{ color: Color.CONTRAST }}>'help'</span> to see the list of commands.
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY}>
                    Copyright © 2023 Hernan Terania not a Corporation. All rights reserved.
                </Typography>
            </Wrapper>
        ),
    },
    iam: {
        message: (
            <Wrapper direction="column" gap="MD">
                <Typography block>
                    A freelance <span style={{ color: Color.CONTRAST }}>Frontend Developer</span> based in the
                    Philippines.
                </Typography>
                <Typography block>
                    For over a decade, I have been working on a variety of projects from small to large scale.
                    Specializing in creative development I have worked with clients from different industries and I am
                    always looking for new challenges.
                </Typography>
                <Typography block>
                    I enjoy technology and I do not prefer any specific tech stack or language. I learn and I build new
                    things, whether that be <span style={{ color: Color.CONTRAST }}>banners</span>,
                    <span style={{ color: Color.CONTRAST }}> website</span>, or
                    <span style={{ color: Color.CONTRAST }}> web applications</span>. My aim will always be able to
                    produce great experiences.
                </Typography>
            </Wrapper>
        ),
    },
    projects: {
        message: (
            <Wrapper direction="column" gap="SM">
                {/* APP 1 */}
                <Wrapper direction="column" gap="SM">
                    <Link href={SPARKLE_APP} icon={<ExternalLinkIcon size={10} fill={Color.TERTIARY} />}>
                        Sparkle
                    </Link>

                    <Typography block>
                        The client is a business that provides services for creating ads creatives for customers. To
                        better serve their customers, we have created a system to digitize the workflow, including
                        requests for creatives, uploading ready ads creatives, and receiving feedback from customers,
                        etc.
                    </Typography>
                    <Typography block variant="CAPTION" color={Color.SECONDARY}>
                        React, Redux, Typescript, Material UI
                    </Typography>
                </Wrapper>
                {/* APP 2 */}
                <Wrapper direction="column" gap="SM">
                    <Link href={MADGICX_APP} icon={<ExternalLinkIcon size={10} fill={Color.TERTIARY} />}>
                        Madgicx
                    </Link>
                    <Typography block>
                        Build tools to help you optimize the aspects of Facebook advertising that largely affect your ad
                        ROI, including tracking, automation, targeting, creatives, and analytics.
                    </Typography>
                    <Typography block variant="CAPTION" color={Color.SECONDARY}>
                        React, Redux, Context, Typescript, SCSS/SASS
                    </Typography>
                </Wrapper>
                {/* APP 3 */}
                <Wrapper direction="column" gap="SM">
                    <Link href={AI_COPYWRITER_APP} icon={<ExternalLinkIcon size={10} fill={Color.TERTIARY} />}>
                        AI Copywriter
                    </Link>
                    <Typography block>
                        AI Copywriter is an application for generating ad copy using OpenAI's GPT-3 technology. It
                        provides users with preset prompts to generate the desired results.
                    </Typography>
                    <Typography block variant="CAPTION" color={Color.SECONDARY}>
                        React, Redux, Typescript, Material UI
                    </Typography>
                </Wrapper>
                {/* APP 4 */}
                <Wrapper direction="column" gap="SM">
                    <Link href={W3BMINT_APP} icon={<ExternalLinkIcon size={10} fill={Color.TERTIARY} />}>
                        W3bmint.io
                    </Link>
                    <Typography block>
                        a platform for brands to launch digital memberships as NFTs with blockchain-backed utility and
                        build web3 communities.
                    </Typography>
                    <Typography block variant="CAPTION" color={Color.SECONDARY}>
                        Vue, Typescript, Tailwind CSS
                    </Typography>
                </Wrapper>
            </Wrapper>
        ),
    },
    skills: {
        message: (
            <>
                <Wrapper gap="SM">
                    <Typography color={Color.CONTRAST}>Coding: </Typography>
                    <Typography>HTML, Javascript (ES6+), (S)CSS/SASS, Typescript</Typography>
                </Wrapper>

                <Wrapper gap="SM">
                    <Typography color={Color.CONTRAST}>Libraries & Frameworks: </Typography>
                    <Typography>
                        React, Redux, Angular, Vue, Jquery, GSAP, style-components, React Bootstrap, Material UI,
                        Tailwind CSS
                    </Typography>
                </Wrapper>

                <Wrapper gap="SM">
                    <Typography color={Color.CONTRAST}>Tools: </Typography>
                    <Typography>VS Code, Git, Jira, Trello, Figma, Photoshop, Illustrator</Typography>
                </Wrapper>
            </>
        ),
    },
    social: {
        message: (
            <Wrapper gap="SM">
                <Typography>Click / Type</Typography>
                <Link href={GITHUB_URL} icon={<LinkIcon size={10} fill={Color.TERTIARY} />}>
                    github
                </Link>

                <Typography>or</Typography>
                <Link href={LINKEDIN_URL} icon={<LinkIcon size={10} fill={Color.TERTIARY} />}>
                    linkedin
                </Link>
            </Wrapper>
        ),
    },
    contact: {
        message: (
            <Wrapper direction="column" gap="MD">
                <Typography block>
                    Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities
                    to be part of something great.
                </Typography>

                <Wrapper gap="SM">
                    <Typography>Click / Type</Typography>
                    <Link href={MAIL_TO} icon={<MailIcon size={10} fill={Color.TERTIARY} />}>
                        email
                    </Link>
                    <Typography>or</Typography>
                    <Link href={RESUME_URL} icon={<DownloadIcon size={12} fill={Color.TERTIARY} />}>
                        download
                    </Link>
                </Wrapper>
            </Wrapper>
        ),
    },
};