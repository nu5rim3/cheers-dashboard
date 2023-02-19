import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// color design token
export const tokens = (mode: PaletteMode) => ({
    ...(mode === 'dark' ?
        {
            primary: {
                100: "#ffddd6",
                200: "#ffbcad",
                300: "#ff9a85",
                400: "#ff795c",
                500: "#ff5733",
                600: "#cc4629",
                700: "#99341f",
                800: "#662314",
                900: "#33110a"
            },
            green: {
                100: "#cdf4e7",
                200: "#9ae9cf",
                300: "#68dfb8",
                400: "#35d4a0",
                500: "#03c988",
                600: "#02a16d",
                700: "#027952",
                800: "#015036",
                900: "#01281b"
            },
            red: {
                100: "#fad8d0",
                200: "#f6b0a1",
                300: "#f18972",
                400: "#ed6143",
                500: "#e83a14",
                600: "#ba2e10",
                700: "#8b230c",
                800: "#5d1708",
                900: "#2e0c04"
            },
            blue: {
                100: "#dde5fa",
                200: "#baccf5",
                300: "#98b2f1",
                400: "#7599ec",
                500: "#537fe7",
                600: "#4266b9",
                700: "#324c8b",
                800: "#21335c",
                900: "#11192e"
            },
            grey: {
                100: "#eaeaea",
                200: "#d6d6d6",
                300: "#c1c1c1",
                400: "#adadad",
                500: "#989898",
                600: "#7a7a7a",
                700: "#5b5b5b",
                800: "#3d3d3d",
                900: "#1e1e1e"
            }
        }
        :
        {
            primary: {
                100: "#33110a",
                200: "#662314",
                300: "#99341f",
                400: "#cc4629",
                500: "#ff5733",
                600: "#ff795c",
                700: "#ff9a85",
                800: "#ffbcad",
                900: "#ffddd6",
            },
            green: {
                100: "#01281b",
                200: "#015036",
                300: "#027952",
                400: "#02a16d",
                500: "#03c988",
                600: "#35d4a0",
                700: "#68dfb8",
                800: "#9ae9cf",
                900: "#cdf4e7",
            },
            red: {
                100: "#2e0c04",
                200: "#5d1708",
                300: "#8b230c",
                400: "#ba2e10",
                500: "#e83a14",
                600: "#ed6143",
                700: "#f18972",
                800: "#f6b0a1",
                900: "#fad8d0",
            },
            blue: {
                100: "#11192e",
                200: "#21335c",
                300: "#324c8b",
                400: "#4266b9",
                500: "#537fe7",
                600: "#7599ec",
                700: "#98b2f1",
                800: "#baccf5",
                900: "#dde5fa",
            },
            grey: {
                100: "#1e1e1e",
                200: "#3d3d3d",
                300: "#5b5b5b",
                400: "#7a7a7a",
                500: "#989898",
                600: "#adadad",
                700: "#c1c1c1",
                800: "#d6d6d6",
                900: "#eaeaea",
            }
        }
    )

});




export const themeSettings = (mode: any) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ?
                {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.green[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[500],
                    }
                } :
                {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.green[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.grey[900],
                    }
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 16,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 28,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 18,
            },
        }
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {

    const [mode, setMode] = useState<PaletteMode>('light');
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = useMemo(
      () =>
        createTheme(themeSettings(mode)),
      [mode],
    );

    return [theme, colorMode] as const;
}