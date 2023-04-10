import Colors from "./theme";
import { ThemeProvider as MUIThemeProvider, Theme, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import componentsOverride from './overrides';
import Typography from "./typography";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  const themeMode = useSelector((state: any) => state.theme);
  const paletteColor = Colors(themeMode.darkTheme ? 'dark' : 'light');

  const customTheme: Theme = createTheme({
    palette: {
      mode: themeMode.darkTheme ? 'dark' : 'light',
      primary: {
        main: paletteColor.primary[600],
      },
      secondary: {
        main: paletteColor.green[600]
      },
      text: {
        primary: paletteColor.grey[200],
        secondary: paletteColor.grey[800],
        disabled: paletteColor.grey[400]
      },
      action: {
        disabled: paletteColor.grey[300]
      },
      divider: paletteColor.grey[700],
      background: {
        paper: paletteColor.grey[900],
        default: paletteColor.grey[900]
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1536
      }
    },
    direction: 'ltr',
    mixins: {
      toolbar: {
        minHeight: 60,
        paddingTop: 8,
        paddingBottom: 8
      }
    },
    ...Typography
  });

  customTheme.components = componentsOverride(customTheme);

  return (

    <MUIThemeProvider theme={customTheme}>
      {children}
    </MUIThemeProvider>

  );
};

export default ThemeProvider;