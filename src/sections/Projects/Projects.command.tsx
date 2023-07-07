import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing, Color } from '@/config/theme';

export default memo(function Projects() {
    return (
        <>
            <div style={{ margin: Spacing.MD }}>
                <Typography color={Color.CONTRAST} block>
                    Task Management Tool:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        The client is a business that provides services for creating ads creatives for customers. To
                        better serve their customers, we have created a system to digitize the workflow, including
                        requests for creatives, uploading ready ads creatives, and receiving feedback from customers,
                        etc.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY} block>
                    React, Typescript, Material UI
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography color={Color.CONTRAST} block>
                    AI Copywriter:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        AI Copywriter is an application for generating ad copy using OpenAI's GPT-3 technology. It
                        provides users with preset prompts to generate the desired results.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY} block>
                    React, Typescript, Material UI
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography color={Color.CONTRAST} block>
                    NFT Generator:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        a platform for brands to launch digital memberships as NFTs with blockchain-backed utility and
                        build web3 communities.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY} block>
                    Vue, Typescript, Nest, Tailwind
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography color={Color.CONTRAST} block>
                    Unified Transport Management System:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        A single unified platform for logistics businesses that brings transparency, efficiency and
                        control. It helps create visibility into complex network of suppliers and customers in real
                        time.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY} block>
                    Angular, Typescript, Angular Material UI
                </Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                <Typography color={Color.CONTRAST} block>
                    Transport Management System:&nbsp;
                    <span style={{ color: Color.PRIMARY }}>
                        A tool used by the logistics team to manage the transportation of goods from suppliers to
                        customers.
                    </span>
                </Typography>
                <Typography variant="CAPTION" color={Color.SECONDARY} block>
                    React, Typescript, React Bootstrap
                </Typography>
            </div>
        </>
    );
});
