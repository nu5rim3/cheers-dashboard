import ThemeProvider from './themes';
import Routes from './routes';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { Suspense } from 'react';
import Loader from './components/Loader';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/localization/i18n';

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
