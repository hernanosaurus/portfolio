import { memo, useCallback, useRef, useState } from 'react';
import { COMMANDS, GITHUB_URL, LINKEDIN_URL, MAIL_TO } from './config/config';
import { Background, Spacing, Color } from './config/theme';
import { Default, Home, Help, Projects, Skills, Social, About, Contact, NotFound } from './sections';
import FormInput from './components/FormInput/FormInput.component';

export default memo(function App() {
    /* terminalLine: Array of React.ReactNode */
    const [terminalLine, setTerminalLine] = useState<React.ReactNode[]>([<Home />]);

    /* inputVal: String value of input */
    const [inputVal, setInputVal] = useState<string>('');

    /* scrollendpoint: Ref of div element, triggers autoscroll */
    const scrollendpoint = useRef<any>(null);
    /* timeout: Ref of timeout, triggers autoscroll */
    const timeout = useRef<any>(null);

    const clearTerminal = useCallback(() => {
        setTerminalLine(previousState => []);
    }, []);

    const renderTerminalLine = useCallback((children: React.ReactNode) => {
        setTerminalLine(previousValue => [...previousValue, <>{children}</>]);
    }, []);

    const renderCommand = useCallback((cmd?: COMMANDS) => {
        switch (cmd?.toLowerCase()) {
            case 'iam':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'skills':
                return <Skills />;
            case 'social':
                return <Social />;
            case 'contact':
                return <Contact />;
            case 'home':
                return (
                    <>
                        <Default inputVal="home" color={Color.SECONDARY} />
                        <Home />
                    </>
                );
            case 'help':
                return <Help />;
            case 'clear':
                clearTerminal();
                return;
            case 'github':
            case 'linkedin':
            case 'email':
                return <Default inputVal={cmd?.toLowerCase()} color={Color.SECONDARY} />;
            default:
                return <NotFound inputVal={cmd?.toLowerCase()} />;
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(previousValue => e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputVal.toLowerCase().trim() === '') return;

        switch (inputVal.toLowerCase()) {
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

        renderTerminalLine(renderCommand(inputVal.toLowerCase() as COMMANDS));

        setInputVal('');

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
        <div
            className="App"
            onClick={handleFocus}
            style={{
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                padding: Spacing.LG,
                background: Background.PRIMARY,
            }}
        >
            {terminalLine}

            <FormInput
                value={inputVal}
                submit={handleSubmit}
                onChange={handleChange}
                focus={true}
                style={{
                    color: Color.PRIMARY,
                    background: Background.PRIMARY,
                    textTransform: 'lowercase',
                    caretColor: Color.CONTRAST,
                }}
                scrollendpoint={scrollendpoint}
            />

            <div ref={scrollendpoint} />
        </div>
    );
});
