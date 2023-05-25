import Typography from '@/components/ui/Typography/Typography.component';
import { Color } from '@/config/theme';
import { memo } from 'react';

export default memo(function NotFound({ inputVal }: { inputVal: string | undefined }) {
    return (
        <Typography variant="BODY1" color={Color.SECONDARY} block>
            command not found: '{inputVal}'. Type <span style={{ color: Color.CONTRAST }}>help</span> to see the list of
            commands.
        </Typography>
    );
});
