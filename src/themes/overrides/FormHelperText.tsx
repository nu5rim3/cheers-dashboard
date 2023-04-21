// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function FormHelperText(theme: any) {
    return {
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[600]
                },
                error: {
                    lineHeight: '0.8em',
                    '&.Mui-error': {
                        color: theme.palette.error
                    },
                }
            }
        }
    };
}
