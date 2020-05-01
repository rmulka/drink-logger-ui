import React, { useContext } from 'react';
import { startCase } from 'lodash'
import { makeStyles } from '@material-ui/core/styles';

import { getFilterDetails, SELECT_FILTER } from '../../metadata/filterMetadata';
import { DEFAULT_MARGIN, SIDE_BAR_WIDTH } from '../../constants/styleConstants';
import CustomSelect from './CustomSelect';
import { SET_FILTER } from '../../constants/filterConstants';
import ApiDataContext from '../../context/ApiDataContext';

const useStyles = makeStyles({
    container: {
        width: `${SIDE_BAR_WIDTH}px`,
        padding: `${DEFAULT_MARGIN}px`,
    }
});

const Filters = ({ drinkType }) => {
    const classes = useStyles();

    const { dispatch } = useContext(ApiDataContext);

    const filterElements = [];

    const changeFilter = (name, value) => {
        dispatch({ type: SET_FILTER, filter: name, value })
    };

    getFilterDetails(drinkType).forEach((filterElement, i) => {
        const { name, filterHook, filterName } = filterElement;
        switch (filterElement.inputType) {
            case SELECT_FILTER:
                filterElements.push(
                    <CustomSelect
                        key={i}
                        name={name}
                        // value={filters[name]}
                        label={startCase(name)}
                        aria-label={startCase(name)}
                        options={filterHook(filterName)}
                        placeholder={`Select ${startCase(name)}`}
                        onChange={(name, value) => changeFilter(name, value)}
                    />
                );
                break;
            default:
                throw new Error('Unsupported filter type');
        }
    });

    return (
        <div className={classes.container}>{filterElements}</div>
    )
};

export default React.memo(Filters);