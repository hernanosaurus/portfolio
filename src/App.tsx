import { memo, useCallback, useRef, useState } from 'react';
import { GITHUB_URL, LINKEDIN_URL, MAIL_TO } from './config/config';
import { Background, Spacing, Color } from './config/theme';
import { Default, Home, Help, Projects, Skills, Social, About, Contact, NotFound, Summary } from './sections';
import FormInput from './components/FormInput/FormInput.component';

interface Style {
    [key: string]: React.CSSProperties;
}

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
    const [terminal, setTerminal] = useState<React.ReactNode[]>([<Home />]);

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
                return CLI('iam', <About />);
            case 'projects':
                return CLI('projects', <Projects />);
            case 'skills':
                return CLI('skills', <Skills />);
            case 'social':
                return CLI('social', <Social />);
            case 'contact':
                return CLI('contact', <Contact />);
            case 'home':
                return CLI('home', <Home style={{ marginTop: Spacing.MD }} />);
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
                return CLI('all', <Summary />);
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
