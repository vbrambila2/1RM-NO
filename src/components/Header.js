import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    homeHeader: {
        background: '#00BFFF',
        textAlign: 'center',
        boxShadow: '0px 1px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'Paytone One',
        fontSize: '36px',
        marginBottom: '20px',
        paddingTop: '20px',
        paddingBottom: '10px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999
    },
    homeHeaderCaption: {
        fontSize: '15px'
    },
    header: {
        background: '#00BFFF',
        textAlign: 'center',
        boxShadow: '0px 1px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
        fontSize: '36px',
        marginBottom: '20px',
        paddingTop: '20px',
        paddingBottom: '10px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 9999
    },
    homeButton: {
        background: '#33ccff',
        boxShadow: '2px 2px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        marginLeft: '10px',
        marginBottom: '10px',
        marginTop: '5px',
        borderRadius: '10px',
        width: '100px',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
    fakeText: {
        visibility: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
        homeButton: {
            background: '#33ccff',
            boxShadow: '2px 2px 1px #006bb3',
            color: '#F8F8F8',
            textShadow: '1px 1px #000000',
            fontFamily: 'PT Sans Caption',
            fontSize: '10px',
            marginLeft: '10px',
            marginBottom: '10px',
            marginTop: '5px',
            borderRadius: '10px',
            width: '50px',
            '&:hover': {
                backgroundColor: '#00ace6',
            },
        },
        header: {
            background: '#00BFFF',
            boxShadow: '0px 1px 1px #006bb3',
            color: '#F8F8F8',
            textShadow: '1px 1px #000000',
            fontFamily: 'PT Sans Caption',
            fontSize: '28px',
            paddingTop: '20px',
            paddingBottom: '10px',
            textTransform: 'uppercase',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 9999
        },
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [ title ] = useState(props.title);
    const [ titleCaption ] = useState(props.titleCaption);
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const url = (pathArray[1]);
    const history = useHistory();

    if (url === '') {
        return (
            <div className={classes.homeHeader}>
                {title}
                <div className={classes.homeHeaderCaption}>{titleCaption}</div>
             </div>
        )
    } else if (title === 'Delete Movement' || title === 'Update Movement') {
        return (
            <div className={classes.header}>
                <div>
                    <Button
                        className={classes.homeButton}
                        variant="contained"
                        onClick={() => history.push("/")}>   
                        Home
                    </Button>
                    <Button 
                        className={classes.homeButton}
                        variant="contained" 
                        onClick={() => history.goBack()} >
                        Back
                    </Button>
                </div>
                {title}
                <div className={classes.fakeText}>----------------</div>
            </div>
        )
    } else {
        return (
            <div className={classes.header}>
                <Button
                    variant="contained"
                    className={classes.homeButton}
                    onClick={() => history.push("/")}>   
                    Home
                </Button>
                {title}
                <div className={classes.fakeText}>-------</div>
            </div>
        )
    } 
};

export default Header;