import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    textTruncated: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    },
    text: {
        display: 'flex'
    }
}));

const CollapsibleTextCell = ({ text }) => {
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);
    const [overflow, setOverflow] = useState(false);

    const ref = useRef(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const textClass = expanded
        ? classes.text
        : classes.textTruncated;

    useEffect(() => {
        setOverflow(ref.current.scrollHeight > ref.current.clientHeight);
    }, []);

    return (
        <TableCell className={classes.root}>
            <Typography ref={ref} className={textClass}>{text}</Typography>
            {overflow &&
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>}
        </TableCell>
    );
};

export default CollapsibleTextCell;
