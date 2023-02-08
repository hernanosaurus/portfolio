import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { COMMANDS } from '@/config/config';
import { Spacing, Color } from '@/config/theme';

export default memo(function Help() {
    return (
        <>
            <Default inputVal="help" color={Color.SECONDARY} />

            <div style={{ margin: Spacing.MD }}>
                {(Object.keys(COMMANDS) as (keyof typeof COMMANDS)[]).map((key, index) => {
                    return (
                        <Typography key={key + index} variant="BODY1" color={Color.PRIMARY}>
                            {COMMANDS[key]}
                        </Typography>
                    );
                })}
            </div>
        </>
    );
});
