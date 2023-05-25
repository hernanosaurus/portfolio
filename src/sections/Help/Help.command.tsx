import { memo } from 'react';
import Default from '@/sections/Default/Default.command';
import Typography from '@/components/ui/Typography/Typography.component';
import { COMMANDS } from '@/config/config';
import { Spacing, Color } from '@/config/theme';

export default memo(function Help() {
    return (
        <>
            <Default inputVal="help" color={Color.SECONDARY} />

            <Typography variant="BODY1" color={Color.PRIMARY} block style={{ margin: Spacing.MD }}>
                Here is the list of available&nbsp;
                <Typography variant="BODY1" color={Color.CONTRAST}>
                    commands
                </Typography>
                :
            </Typography>

            <div style={{ margin: Spacing.MD }}>
                {(Object.keys(COMMANDS) as (keyof typeof COMMANDS)[]).map((key, index) => {
                    return (
                        <Typography key={key + index} variant="BODY1" color={Color.PRIMARY} block>
                            {COMMANDS[key]}
                        </Typography>
                    );
                })}
            </div>
        </>
    );
});
