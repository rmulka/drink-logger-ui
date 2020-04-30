import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { NAV_BAR_HEIGHT, DEFAULT_MARGIN } from '../../constants/styleConstants';

import Header from '../Header/Header';
import Routes from '../routes/Routes';
import DataProvider from '../../provider/DataProvider';
import FilterProvider from '../../provider/FilterProvider';

const useStyles = makeStyles(() => ({
    mainContainer: {
        height: `calc(100vh - ${NAV_BAR_HEIGHT}px - ${DEFAULT_MARGIN * 2}px)`,
        width: '100%',
        margin: `${DEFAULT_MARGIN}px`,
    },
    layout: {
        height: '100%',
        width: '100%'
    }
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <Header />
            <DataProvider>
                <FilterProvider>
                    <div className={classes.mainContainer}>
                        <Routes />
                    </div>
                </FilterProvider>
            </DataProvider>
        </div>
    )
};

export default Layout;