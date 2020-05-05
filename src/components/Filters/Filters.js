import React, { useCallback, useContext } from 'react';
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
        marginTop: `${DEFAULT_MARGIN * 2}px`,
        margin: `${DEFAULT_MARGIN}px`,
    }
});

const Filters = ({ drinkType }) => {
    const classes = useStyles();

    const { dispatch, filters } = useContext(ApiDataContext);

    const filterElements = [];

    const changeFilter = useCallback(
        (name, value) => dispatch({ type: SET_FILTER, filter: name, value }),
        [dispatch]
    );

    getFilterDetails(drinkType).forEach((filterElement, i) => {
        const { name, filterHook, filterName } = filterElement;
        switch (filterElement.inputType) {
            case SELECT_FILTER:
                filterElements.push(
                    <CustomSelect
                        key={i}
                        name={name}
                        label={startCase(name)}
                        value={filters[name] || null}
                        aria-label={startCase(name)}
                        options={filterHook(filterName)}
                        placeholder={`Select ${startCase(name)}`}
                        onChange={changeFilter}
                    />
                );
                break;
            default:
                throw new Error(`Unsupported filter type ${filterElement.inputType}`);
        }
    });

    return (
        <div className={classes.container}>{filterElements}</div>
    )
};

const areEqual = (prevProps, nextProps) => prevProps.drinkType === nextProps.drinkType;

export default React.memo(Filters, areEqual);