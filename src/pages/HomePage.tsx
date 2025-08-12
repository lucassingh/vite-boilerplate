import { useTranslation } from 'react-i18next';
import { Typography, Button, Box } from '@mui/material';

export const HomePage = () => {

    const { t, i18n } = useTranslation('common')

    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
                {t('welcome')}
            </Typography>

            <Typography variant="body1" paragraph>
                {t('home')}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            >
                {t('changeLanguage')}
            </Button>
        </Box>
    );
};