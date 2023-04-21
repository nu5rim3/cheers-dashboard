import Checkbox from '@mui/material/Checkbox/Checkbox'
import FormControl from '@mui/material/FormControl/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel'
import FormGroup from '@mui/material/FormGroup/FormGroup'
import FormHelperText from '@mui/material/FormHelperText/FormHelperText'
import FormLabel from '@mui/material/FormLabel/FormLabel'
import React from 'react'


interface GroupCheckBoxProps {
    required: boolean,
    error: boolean | undefined,
    errorMessage: string | string[] | boolean | undefined,
    data: any[],
    handleChange: (e: React.ChangeEvent<any>) => void,
    label: string,
    name: string,
    row?: boolean,
    values: any[],
}

const GroupCheckBox: React.FC<GroupCheckBoxProps> = ({ required, error, errorMessage, data, label, row, name, values, handleChange }) => {
    
    return (
        <FormControl
            required={required}
            error={error}
            component="fieldset"
            variant="standard"
        >
            <FormLabel component="legend" error={error}>{label}</FormLabel>
            <FormGroup row={row}>
                {data.map((item) => (
                    <FormControlLabel
                        key={item}
                        control={
                            <Checkbox
                                name={name}
                                value={item}
                                checked={values.includes(item)}
                                onChange={handleChange}

                            />
                        }
                        label={item}
                    />
                ))}
            </FormGroup>
            <FormHelperText>{errorMessage}</FormHelperText>
        </FormControl>
    )
}

export default GroupCheckBox;