import ThemeProvider from './themes';
import Routes from './routes';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { Suspense } from 'react';
import Loader from './components/Loader';

function App() {

  return (
    <ThemeProvider>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
