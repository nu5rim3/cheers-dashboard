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
    row?: boolean
}

const GroupCheckBox: React.FC<GroupCheckBoxProps> = ({ required, error, errorMessage, data, label, row, handleChange }) => {
    return (
        <FormControl
            required={required}
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
                                name="category"
                                value={item}
                                onChange={handleChange}
                            />
                        }
                        label={item}
                    />
                ))}
            </FormGroup>
            <FormHelperText error={error}>{errorMessage}</FormHelperText>
        </FormControl>
    )
}

export default GroupCheckBox;