import React from 'react';

import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';

import { DEFAULT_MARGIN } from '../../constants/styleConstants';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginBottom: `${2 * DEFAULT_MARGIN}px`,
    }
}));

const CustomSelect = ({ name, label, value, placeholder, options, onChange }) => {
    const classes = useStyles();

    const changeFilter = (e, value) => {
        onChange(name, value);
    };

    return (
        <Autocomplete
            classes={{ root: classes.root }}
            id={name}
            name={name}
            options={options}
            value={value}
            onChange={changeFilter}
            renderInput={props => (
                <TextField
                    {...props}
                    label={label}
                    placeholder={placeholder}
                    fullWidth
                />
            )}
        />
    );
};

export default React.memo(CustomSelect);