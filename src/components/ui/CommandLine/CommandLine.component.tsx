import { Spacing } from '@/config/theme';
import { memo } from 'react';

export default memo(function CommandLine({ content }: { content: React.ReactNode }) {
    return <div style={{ padding: Spacing.MD }}>{content}</div>;
});
