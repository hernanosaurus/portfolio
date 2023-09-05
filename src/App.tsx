import { memo, useCallback, useRef, useState } from 'react';
import { Content, GITHUB_URL, LINKEDIN_URL, MAIL_TO } from './config/config';
import { Background, Spacing, Color } from './config/theme';
import { Default, Help, NotFound, Summary } from './sections';
import FormInput from './components/FormInput/FormInput.component';
import CommandLine from './components/ui/CommandLine/CommandLine.component';

export type Message = {
    text: string;
    variant?: string;
    color?: string;
    spacing?: string;
    block?: boolean;
};
export type Clickthrough = {
    title: Message;
    link: string;
};

export type Data = {
    title: Message;
    messages?: Message[];
    copyright?: Message;
    tech?: Message[];
    app?: Clickthrough;
    mailto?: Clickthrough;
    resume?: Clickthrough;
};

type Style = {
    [key: string]: React.CSSProperties;
};

const style: Style = {
    Root: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        padding: Spacing.LG,
        background: Background.PRIMARY,
    },
    Input: {
        color: Color.PRIMARY,
        background: Background.PRIMARY,
        textTransform: 'lowercase',
        caretColor: Color.CONTRAST,
    },
};

const CLI = (title: string, children: React.ReactNode): React.ReactNode => (
    <>
        <Default input={title} color={Color.SECONDARY} />
        {children}
    </>
);

export default memo(function App() {
    /* terminal: Array of React.ReactNode */
    const [terminal, setTerminal] = useState<React.ReactNode[]>([<CommandLine content={Content['home'].message} />]);

    /* cli: String value of input */
    const [command, setCommand] = useState<string>('');

    /* scrollendpoint: Ref of div element, triggers autoscroll */
    const scrollendpoint = useRef<any>(null);

    /* timeout: Ref of timeout, triggers autoscroll */
    const timeout = useRef<any>(null);

    const clearTerminal = useCallback(() => setTerminal(previousState => []), []);

    const RenderTerminal = useCallback((children: React.ReactNode) => {
        setTerminal(previousValue => [...previousValue, <>{children}</>]);
    }, []);

    const RenderCLI = useCallback((command?: string) => {
        switch (command) {
            case 'iam':
            case 'projects':
            case 'skills':
            case 'social':
            case 'contact':
            case 'home':
                return CLI(command, <CommandLine content={Content[command].message} />);
            case 'help':
                return CLI('help', <Help />);
            case 'clear':
                clearTerminal();
                return;
            case 'github':
            case 'linkedin':
            case 'email':
                return <Default input={command} color={Color.SECONDARY} />;
            case 'all':
                return CLI('all', <Summary content={Content} />);
            default:
                return <NotFound input={command} />;
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(previousValue => e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = command?.toLowerCase();

        switch (input) {
            case 'github':
                window.open(GITHUB_URL, '_blank');
                break;
            case 'linkedin':
                window.open(LINKEDIN_URL, '_blank');
                break;
            case 'email':
                window.location.href = MAIL_TO;
                break;
        }

        RenderTerminal(RenderCLI(input));

        setCommand('');

        timeout.current = setTimeout(() => {
            if (scrollendpoint.current !== null) {
                scrollendpoint.current.scrollIntoView({
                    behavior: 'smooth',
                });
            } else {
                clearTimeout(timeout.current);
            }
        }, 100);
    };

    const handleFocus = useCallback(() => {
        const input = document.querySelector('input');

        input?.focus();
    }, []);

    return (
        <div className="App" onClick={handleFocus} style={{ ...style.Root }}>
            {terminal}

            <FormInput
                value={command}
                submit={handleSubmit}
                onChange={handleChange}
                focus={true}
                style={{ ...style.Input }}
                scrollendpoint={scrollendpoint}
            />

            <div ref={scrollendpoint} />
        </div>
    );
});
