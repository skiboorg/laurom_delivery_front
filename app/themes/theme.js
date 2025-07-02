
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/lara';

const CustomTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#ffffff',
            100: '#e0e5fd',
            200: '#c0ccfb',
            300: '#9db4f9',
            400: '#759cf6',
            500: '#5480d6',
            600: '#425e9c',
            700: '#2f3f65',
            800: '#1c2233',
            900: '#000000',
            950: '#000000'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#5480d6',
                    inverseColor: '#ffffff',
                    hoverColor: '#425e9c',
                    activeColor: '#2f3f65'
                },
                highlight: {
                    background: '#e0e5fd',
                    focusBackground: '#c0ccfb',
                    color: '#000000',
                    focusColor: '#000000'
                }
            },
            dark: {
                primary: {
                    color: '#c0ccfb',
                    inverseColor: '#000000',
                    hoverColor: '#e0e5fd',
                    activeColor: '#5480d6'
                },
                highlight: {
                    background: 'rgba(255, 251, 235, .08)',
                    focusBackground: 'rgba(255, 251, 235, .12)',
                    color: 'rgba(255,251,235,.95)',
                    focusColor: 'rgba(255,251,235,.95)'
                }
            }
        }
    },
    rules: {
        global: {
            fontSize: '0.75rem',
            borderRadius: '0.2rem'
        },
        button: {
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            gap: '0.3rem'
        },
        input: {
            fontSize: '0.75rem',
            padding: '0.3rem 0.5rem'
        },
        dropdown: {
            fontSize: '0.75rem',
            itemPadding: '0.25rem 0.5rem'
        },
        datatable: {
            cellPadding: '0.25rem 0.5rem',
            fontSize: '0.75rem'
        },
        dialog: {
            padding: '0.75rem',
            headerFontSize: '0.9rem',
            contentFontSize: '0.75rem'
        },
        card: {
            padding: '0.75rem'
        },
        tabview: {
            fontSize: '0.75rem'
        },
        checkbox: {
            size: '1rem'
        },
        radiobutton: {
            size: '1rem'
        }
    }
});

export default {
    preset: CustomTheme,
    options: {
        darkModeSelector: '.p-dark'
    }
};
