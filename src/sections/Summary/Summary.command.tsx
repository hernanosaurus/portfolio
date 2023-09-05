import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing } from '@/config/theme';
import CommandLine from '@/components/ui/CommandLine/CommandLine.component';
import { JSONData } from '@/App';

export default memo(function Summary({ data }: { data: JSONData }) {
    return (
        <div style={{ margin: Spacing.MD }}>
            {Object.keys(data).map((key, index) => {
                return (
                    <div key={key + index}>
                        <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                            {key.toUpperCase()}
                        </Typography>
                        <CommandLine data={data[key as keyof JSONData]} />
                    </div>
                );
            })}
        </div>
    );
});
