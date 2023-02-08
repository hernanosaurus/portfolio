import Typography from '@/components/ui/Typography/Typography.component';
import { Color } from '@/config/theme';
import { memo } from 'react';

export default memo(function Home() {
    return (
        <>
            <Typography variant="BODY1" color={Color.PRIMARY}>
                Welcome! I am Hernan, a <span style={{ color: Color.CONTRAST }}>Keyboard for Hire</span>.
            </Typography>
            <Typography variant="BODY1" color={Color.PRIMARY}>
                Type <span style={{ color: Color.CONTRAST }}>help</span> for available commands.
            </Typography>
            <Typography variant="CAPTION" color={Color.SECONDARY}>
                Copyright &#169; 2023 Hernan Terania not a Corporation. All rights reserved.
            </Typography>
        </>
    );
});
