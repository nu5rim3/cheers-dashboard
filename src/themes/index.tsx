// import { Theme, createTheme } from "@mui/material";
import Colors from "./theme";
import { ThemeProvider as MUIThemeProvider, Theme, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import componentsOverride from './overrides';

// const darkPaletteColor = Colors('dark');
// const lightPaletteColor = Colors('light');

// export const lightTheme:Theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: lightPaletteColor.primary[500]
//     },
//     background: {
//       paper: "#f2f2f2",
//     },
//     text: {
//       primary: "#11111",
//     },
//   },
// });

// export const darkTheme:Theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: darkPaletteColor.primary[400]
//     },
//     background: {
//       paper: "#222",
//     },
//     text: {
//       primary: "#fff",
//     },
//   },
// });


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
        secondary: paletteColor.grey[200],
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
    }
  });

  customTheme.components = componentsOverride(customTheme);

  return (

    <MUIThemeProvider theme={customTheme}>
      {children}
    </MUIThemeProvider>

  );
};

export default ThemeProvider;