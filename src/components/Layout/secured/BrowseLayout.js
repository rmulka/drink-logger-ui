import React from 'react';

import BrowseContainer from '../../../containers/BrowseContainer';
import Filters from '../../Filters/Filters';
import CustomTable from '../../Table/CustomTable';
import DataProvider from '../../../provider/DataProvider';

const BrowseLayout = (props) => {
    const resource = props.match.params.resource;

    return (
        <BrowseContainer>
            <DataProvider>
                <Filters drinkType={resource} />
                <CustomTable tableType={resource} />
            </DataProvider>
        </BrowseContainer>
    )
};

export default BrowseLayout;