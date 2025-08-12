import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../router/routesConfig';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaLanguage } from 'react-icons/fa';
import { useThemeContext } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';

export const NavBarComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const { mode, toggleTheme } = useThemeContext();
    const { language, toggleLanguage } = useLanguageContext();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <List>
                {routes.map((route) => (
                    <ListItem key={route.path} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={route.path}
                            selected={location.pathname === route.path}
                            sx={{
                                color: theme.palette.text.primary,
                                '&.Mui-selected': {
                                    backgroundColor: theme.palette.action.selected,
                                },
                                '&:hover': {
                                    backgroundColor: theme.palette.action.hover,
                                }
                            }}
                        >
                            <ListItemText primary={route.path === '/' ? 'Home' : 'About'} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText'
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit',
                            fontWeight: 'bold'
                        }}
                    >
                        Mi App
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {/* Toggle de Idioma */}
                        <IconButton
                            onClick={toggleLanguage}
                            color="inherit"
                            aria-label="toggle language"
                        >
                            <FaLanguage />
                            <Box component="span" sx={{ ml: 1 }}>
                                {language.toUpperCase()}
                            </Box>
                        </IconButton>

                        {/* Toggle de Tema */}
                        <IconButton
                            onClick={toggleTheme}
                            color="inherit"
                            aria-label="toggle theme"
                        >
                            {mode === 'dark' ? <FaSun /> : <FaMoon />}
                        </IconButton>

                        {/* Menú para móviles */}
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>

                    {/* Menú para desktop */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 1, ml: 3 }}>
                            {routes.map((route) => (
                                <Button
                                    key={route.path}
                                    component={RouterLink}
                                    to={route.path}
                                    variant={location.pathname === route.path ? 'contained' : 'text'}
                                    sx={{
                                        color: 'inherit',
                                        backgroundColor: location.pathname === route.path ?
                                            'primary.dark' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'primary.light',
                                        }
                                    }}
                                >
                                    {route.path === '/' ? 'Home' : 'About'}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer para móviles */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};