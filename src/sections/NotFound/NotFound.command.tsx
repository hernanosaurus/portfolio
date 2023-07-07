import Typography from '@/components/ui/Typography/Typography.component';
import { Color } from '@/config/theme';
import { memo } from 'react';

export default memo(function NotFound({ input }: { input: string | undefined }) {
    return (
        <Typography color={Color.SECONDARY} block>
            command not found: '{input}'. Type <span style={{ color: Color.CONTRAST }}>help</span> to see the list of
            commands.
        </Typography>
    );
});
