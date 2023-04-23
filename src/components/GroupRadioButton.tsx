import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';

interface GroupRadioButtonProps {
    required: boolean,
    error: boolean | undefined,
    errorMessage: string | string[] | boolean | undefined,
    data: any[],
    handleChange: (e: React.ChangeEvent<any>) => void,
    label: string,
    name: string,
    row?: boolean,
    value: string,
}

const GroupRadioButton: React.FC<GroupRadioButtonProps> = ({ required, error, errorMessage, data, label, name, row, value, handleChange }) => {

    return (
        <FormControl
            required={required}
            error={error}
            component="fieldset"
        >
            <FormLabel component="legend" error={error}>{label}</FormLabel>
            <RadioGroup
                row={row}
            >
                {data.map((item) => (
                    <FormControlLabel
                        key={item}
                        value={item}
                        control={
                            <Radio
                                name={name}
                                // value={item}
                                checked={value ===(item)}
                                onChange={handleChange}
                            />}
                        label={item} />
                ))}
            </RadioGroup>
            <FormHelperText>{errorMessage}</FormHelperText>
        </FormControl>
    );
}

export default GroupRadioButton;