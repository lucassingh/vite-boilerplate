import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { darkPalette, lightPalette } from './palettes';

// Configuración base del tema con breakpoints personalizados
const baseTheme: ThemeOptions = {
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
};

export const createAppTheme = (mode: 'light' | 'dark') => {
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return createTheme({
        ...baseTheme,
        palette: {
            mode,
            ...palette,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        textTransform: 'none',
                        borderRadius: '8px',
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        [theme.breakpoints.down('md')]: {
                            padding: '8px 12px',
                            fontSize: '0.875rem',
                        },
                    }),
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        backgroundColor: theme.palette.background.paper,
                        // Ejemplo responsive para Card
                        [theme.breakpoints.up('lg')]: {
                            padding: theme.spacing(3),
                        },
                        [theme.breakpoints.only('md')]: {
                            padding: theme.spacing(2),
                        },
                        [theme.breakpoints.down('sm')]: {
                            padding: theme.spacing(1),
                        },
                    }),
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        backgroundColor: theme.palette.mode === 'light'
                            ? lightPalette.primary.main
                            : darkPalette.primary.main,
                        // Ejemplo responsive para AppBar
                        [theme.breakpoints.down('md')]: {
                            paddingLeft: theme.spacing(2),
                            paddingRight: theme.spacing(2),
                        },
                    }),
                },
            },
            // Puedes agregar más componentes con estilos responsive
        },
    });
};

export type AppTheme = ReturnType<typeof createAppTheme>;