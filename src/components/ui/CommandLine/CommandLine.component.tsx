import { Data, Message } from '@/App';
import { DownloadIcon, LinkIcon } from '@/assets/icons';
import Link from '@/components/ui/Link/Link.component';
import Typography from '@/components/ui/Typography/Typography.component';
import { Color, Spacing } from '@/config/theme';
import { memo } from 'react';
import { Wrapper } from '../Wrapper/Wrapper.component';

export default memo(function CommandLine({ data }: { data: Data[] }) {
    return (
        <div style={{ padding: Spacing.MD }}>
            {data.map((item: any, i: number) => {
                return (
                    <div key={i} style={{ ...item.style, marginBottom: Spacing[item.spacing] }}>
                        {item.title && item.link ? (
                            <Wrapper>
                                <Link
                                    href={item.link}
                                    style={{
                                        color: Color[item.title.color as keyof typeof Color],
                                        marginRight: Spacing[item.title.spacing as keyof typeof Spacing],
                                    }}
                                >
                                    {item.title.text}
                                </Link>
                                <LinkIcon size={10} fill={Color.TERTIARY} />
                            </Wrapper>
                        ) : (
                            <Typography
                                variant={item.title.variant}
                                color={Color[item.title.color as keyof typeof Color]}
                                style={{ marginBottom: Spacing[item.title.spacing as keyof typeof Spacing] }}
                                block={item.title.block}
                            >
                                {item.title.text}
                            </Typography>
                        )}

                        {item.app && (
                            <Wrapper style={{ marginBottom: Spacing[item.app.title.spacing as keyof typeof Spacing] }}>
                                <Link
                                    href={item.app.link}
                                    style={{
                                        color: Color[item.app.title.color as keyof typeof Color],
                                    }}
                                >
                                    {item.app.title.text}
                                </Link>
                                <LinkIcon size={10} fill={Color.TERTIARY} />
                            </Wrapper>
                        )}

                        {item.messages?.map((message: Message, index: number) => {
                            return (
                                <Typography
                                    key={index}
                                    variant={message.variant}
                                    color={Color[message.color as keyof typeof Color]}
                                    style={{ marginBottom: Spacing[message.spacing as keyof typeof Spacing] }}
                                    block={message.block}
                                >
                                    {message.text}
                                </Typography>
                            );
                        })}

                        {item.tech && (
                            <div style={{ marginBottom: Spacing.LG }}>
                                {item.tech?.map((tech: Message, index: number) => {
                                    return (
                                        <Typography
                                            key={index}
                                            variant={tech.variant}
                                            color={Color[tech.color as keyof typeof Color]}
                                            style={{ marginRight: Spacing[tech.spacing as keyof typeof Spacing] }}
                                        >
                                            {tech.text}
                                        </Typography>
                                    );
                                })}
                            </div>
                        )}

                        {item.mailto && (
                            <Wrapper>
                                <Link
                                    href={item.mailto.link}
                                    style={{
                                        color: Color[item.mailto.title.color as keyof typeof Color],
                                        display: 'block',
                                    }}
                                >
                                    {item.mailto.title.text}
                                </Link>
                                <LinkIcon size={10} fill={Color.TERTIARY} />
                            </Wrapper>
                        )}

                        {item.resume && (
                            <Wrapper>
                                <Link
                                    href={item.resume.link}
                                    style={{
                                        color: Color[item.resume.title.color as keyof typeof Color],
                                        display: 'block',
                                    }}
                                >
                                    {item.resume.title.text}
                                </Link>
                                <DownloadIcon size={14} fill={Color.TERTIARY} />
                            </Wrapper>
                        )}

                        {item.copyright && (
                            <Typography
                                variant={item.copyright.variant}
                                color={Color[item.copyright.color as keyof typeof Color]}
                                block
                            >
                                {item.copyright.text}
                            </Typography>
                        )}
                    </div>
                );
            })}
        </div>
    );
});
