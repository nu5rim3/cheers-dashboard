// third-party
import { merge } from 'lodash';

// project import
import Badge from './Badge';
import Button from './Button';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Chip from './Chip';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import Link from './Link';
import ListItemIcon from './ListItemIcon';
import OutlinedInput from './OutlinedInput';
import Tab from './Tab';
import TableCell from './TableCell';
import Tabs from './Tabs';
import Typography from './Typography';
import ListItemButton from './ListItemButton';
import FormHelperText from './FormHelperText';
import FormLabel from './FormLabel';


// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: any) {
    return merge(
        Button(theme),
        Badge(theme),
        CardContent(),
        Checkbox(theme),
        Chip(theme),
        FormHelperText(theme),
        FormLabel(theme),
        IconButton(theme),
        InputLabel(theme),
        LinearProgress(),
        Link(),
        ListItemIcon(),
        OutlinedInput(theme),
        Tab(theme),
        TableCell(theme),
        Tabs(),
        Typography(),
        ListItemButton(theme)
    );
}
