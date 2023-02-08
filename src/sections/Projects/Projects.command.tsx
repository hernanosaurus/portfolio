import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';

export default memo(function Projects() {
    return (
        <>
            <Default inputVal="projects" color={Color.SECONDARY} />

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    Task Management Tool - Sparkle:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        Sparkle is a business unit of Madgicx that provides services for creating ads creatives for
                        customers. To better serve our customers, we have created a system to digitize the workflow,
                        including requests for creatives, uploading ready ads creatives, and receiving feedback from
                        customers, etc.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY}>
                    React, Typescript, Material UI
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    AI Copywriter:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        AI Copywriter is an application for generating ad copy using OpenAI's GPT-3 technology. It
                        provides users with preset prompts to generate the desired results.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY}>
                    React, Typescript, Material UI
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    W3bmint:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        a platform for brands to launch digital memberships as NFTs with blockchain-backed utility and
                        build web3 communities.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY}>
                    Vue, Typescript, Nest, Tailwind
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    Beon Shipper:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        A single unified platform for logistics businesses that brings transparency, efficiency and
                        control. It helps create visibility into complex network of suppliers and customers in real
                        time.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY}>
                    Angular, Typescript, Angular Material UI
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    Transpost Management System 3 - TMS 3:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        A tool used by the logistics team to manage the transportation of goods from suppliers to
                        customers.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY}>
                    React, Typescript, React Bootstrap
                </Typography>
            </div>
        </>
    );
});
