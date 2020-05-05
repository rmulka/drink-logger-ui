import React from 'react';

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import { CLOSE_POPPER, CLOSE_ALL } from '../../constants/headerConstants';

const CustomPopper = ({ open, dispatch, anchorEl, index, subLinks, label }) => {
    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            dispatch({ type: CLOSE_ALL });
        }
    };

    const handleClose = (event) => {
        if (anchorEl.current && anchorEl.current.contains(event.target)) {
            return;
        }

        dispatch({ type: CLOSE_POPPER, index })
    };

    return (
        <Popper open={open} anchorEl={anchorEl.current} role={undefined} transition disablePortal>
            {({TransitionProps}) => (
                <Grow
                    { ...TransitionProps }
                    style={{ transformOrigin: 'center bottom' }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={(event) => handleClose(event, index)}>
                            <MenuList autoFocusItem={open} id={`${label}-list`}
                                      onKeyDown={handleListKeyDown}>
                                {subLinks.map(subLink => (
                                    <MenuItem
                                        key={subLink.label}
                                        component={Link}
                                        to={subLink.path}
                                        onClick={(event) => handleClose(event, index)}
                                    >
                                        {subLink.label}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
};

export default React.memo(CustomPopper);