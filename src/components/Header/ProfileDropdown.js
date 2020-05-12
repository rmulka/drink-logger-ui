import React, { forwardRef } from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import CustomPopper from './CustomPopper';
import { PROFILE_LINKS } from '../../metadata/headerMetadata';

const LABEL = 'Profile';

const ProfileDropdown = forwardRef((props, ref) => {
    const { open, dispatch, handleToggle, index } = props;
    return (
        <div key={LABEL}>
            <IconButton
                ref={ref}
                aria-controls={open ? `${LABEL}-list` : undefined}
                aria-haspopup='true'
                onClick={handleToggle(index)}
                aria-label={LABEL}
            >
                <AccountCircleIcon />
            </IconButton>
            <CustomPopper
                open={open}
                anchorEl={ref}
                dispatch={dispatch}
                index={index}
                options={PROFILE_LINKS}
                label={LABEL}
            />
        </div>
    )
});

export default React.memo(ProfileDropdown);