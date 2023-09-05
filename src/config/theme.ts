export const BLACK = '#000000';
export const WHITE = '#FFFFFF';

export enum Background {
    PRIMARY = '#16161a',
    SECONDARY = '#fffff3',
}

export enum Color {
    PRIMARY = '#fffff3',
    SECONDARY = '#94a1b2',
    TERTIARY = '#c147e9',
    CONTRAST = '#2cb67d',
}

export enum Spacing {
    XS = 4,
    SM = 8,
    MD = 16,
    LG = 24,
    XL = 32,
}

export enum FontWeight {
    LIGHT = 300,
    REGULAR = 400,
    MEDIUM = 500,
    SEMIBOLD = 600,
    BOLD = 700,
}

export type FontVariantType = 'H1' | 'H2' | 'H3' | 'BODY1' | 'CAPTION';

export const FontVariant: {
    [key in FontVariantType]: {
        fontSize: number;
        lineHeight: string;
    };
} = {
    H1: {
        fontSize: 32,
        lineHeight: '1.5rem',
    },
    H2: {
        fontSize: 24,
        lineHeight: '1.5rem',
    },
    H3: {
        fontSize: 20,
        lineHeight: '1.5rem',
    },
    BODY1: {
        fontSize: 14,
        lineHeight: '1.5rem',
    },
    CAPTION: {
        fontSize: 10,
        lineHeight: '1rem',
    },
};
