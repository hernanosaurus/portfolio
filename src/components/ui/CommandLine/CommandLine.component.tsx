import { Spacing } from '@/config/theme';
import { memo } from 'react';

export default memo(function CommandLine({ content }: { content: React.ReactNode }) {
    return <div style={{ margin: `${Spacing.MD}px 0` }}>{content}</div>;
});
