import Marker from '@/components/ui/Marker/Marker.component';
import Typography from '@/components/ui/Typography/Typography.component';
import { Color } from '@/config/theme';
import { memo } from 'react';

export default memo(function Default({
    inputVal,
    color = Color.CONTRAST,
}: {
    inputVal: string | undefined;
    color?: Color;
}) {
    return (
        <Typography variant="BODY1" color={Color.SECONDARY} block>
            <Marker color={color}>~</Marker>
            {inputVal}
        </Typography>
    );
});
