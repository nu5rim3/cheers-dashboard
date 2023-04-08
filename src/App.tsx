import './App.css';
import ThemeProvider from './themes';
import ThemeRoutes from './routes';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';

function App() {

  return (
    <ThemeProvider>
      <CssBaseline />
      <ThemeRoutes />
    </ThemeProvider>
  );
}

export default App;
