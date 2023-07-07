import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { COMMANDS } from '@/config/config';
import { Spacing, Color } from '@/config/theme';

export default memo(function Help() {
    return (
        <>
            <Typography block style={{ margin: Spacing.MD }}>
                Here is the list of available&nbsp;
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    commands
                </Typography>
                :
            </Typography>

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
