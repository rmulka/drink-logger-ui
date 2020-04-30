import React, { useContext } from 'react';

import { resources } from '../../../config/apiConfig';
import Loading from '../../General/Loading';
import CustomTable from '../../Table/CustomTable';
import { BEER } from '../../../constants/drinkConstants';
import useFetch from '../../../hooks/api/useFetch';
import BrowseContainer from '../../../containers/BrowseContainer';
import Filters from '../../Filters/Filters';
import FilterContext from '../../../context/FilterContext';

const BeersLayout = () => {
    const { filterState } = useContext(FilterContext);

    const {
        isLoading,
        isError,
        errorMessage,
        errorCode
    } = useFetch(resources.BEERS);

    if (isLoading) return <Loading />;
    // TODO - create error handling component
    if (isError) return <div>{errorCode}: {errorMessage}</div>;

    return (
        <BrowseContainer>
            <Filters drinkType={BEER} />
            <CustomTable data={filterState.filteredData} tableType={BEER} />
        </BrowseContainer>
    )
};

export default BeersLayout;