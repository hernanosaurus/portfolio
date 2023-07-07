import Marker from '@/components/ui/Marker/Marker.component';
import Typography from '@/components/ui/Typography/Typography.component';
import { Color } from '@/config/theme';
import { memo } from 'react';

export default memo(function Default({ input, color = Color.CONTRAST }: { input: string | undefined; color?: Color }) {
    return (
        <Typography color={Color.SECONDARY} block>
            <Marker color={color}>~</Marker>
            {input}
        </Typography>
    );
});
