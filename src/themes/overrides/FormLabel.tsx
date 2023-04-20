// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function FormLabel(theme: any) {
    return {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[600]
                },
                error: {
                    '&.Mui-error': {
                        color: theme.palette.error
                    }
                }
            }
        }
    };
}
