// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemButton(theme: any) {
    return {
        MuiListItemButton: {
            styleOverrides: {
              root: {
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                },
              },
              selected: {
                backgroundColor: theme.palette.primary.main,
              }
            }
          },
    };
}
