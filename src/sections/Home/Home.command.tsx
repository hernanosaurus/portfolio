import Typography from '@/components/ui/Typography/Typography.component';
import { Color, Spacing } from '@/config/theme';
import { memo } from 'react';

export default memo(function Home({ style }: { style?: React.CSSProperties }) {
    return (
        <div style={{ marginBottom: Spacing.MD, ...style }}>
            <Typography variant="H3" block>
                Welcome! I am Hernan, a <span style={{ color: Color.CONTRAST }}>Keyboard for Hire</span>.
            </Typography>
            <Typography variant="H3" block>
                Type <span style={{ color: Color.CONTRAST }}>help</span> for available commands.
            </Typography>
            <Typography variant="CAPTION" color={Color.SECONDARY} block>
                Copyright &#169; 2023 Hernan Terania not a Corporation. All rights reserved.
            </Typography>
        </div>
    );
});
