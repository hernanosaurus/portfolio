import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { COMMANDS } from '@/config/config';
import { Spacing, Color } from '@/config/theme';

export default memo(function Help() {
    return (
        <>
            <div style={{ margin: Spacing.MD }}>
                <Typography>Here is the list of available </Typography>
                <Typography color={Color.CONTRAST}>commands:</Typography>
            </div>

            <div style={{ margin: Spacing.MD }}>
                {(Object.keys(COMMANDS) as (keyof typeof COMMANDS)[]).map((key, index) => {
                    return (
                        <Typography key={key + index} block>
                            {COMMANDS[key]}
                        </Typography>
                    );
                })}
            </div>
        </>
    );
});
