import { memo } from 'react';
import Typography from '@/components/ui/Typography/Typography.component';
import { Spacing } from '@/config/theme';
import CommandLine from '@/components/ui/CommandLine/CommandLine.component';

export default memo(function Summary({ content }: { content: { [key: string]: { message: React.ReactNode } } }) {
    return (
        <div style={{ margin: Spacing.MD }}>
            {Object.keys(content).map((key, index) => {
                return (
                    <div key={key + index}>
                        <Typography variant="H3" block style={{ textDecoration: 'underline' }}>
                            {key.toUpperCase()}
                        </Typography>
                        <CommandLine content={content[key].message} />
                    </div>
                );
            })}
        </div>
    );
});
