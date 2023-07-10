import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Bagel from '../../assets/bagel.PNG'
import { Link, useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        backgroundColor: '#050505',
    },
    topNav: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    bagel: {
        display: 'flex',
        alignItems: 'center',
        width: '390px'
    },
    bagelWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    rightNavigation: {
        display: 'flex',
        '& a': {
            textDecoration: 'none',
            color: 'white',
            fontSize: '16px',
            marginRight: '30px'
        }
    },
    demoBeta: {
        fontWeight: 'bold',
        '& a': {
            textDecoration: 'none',
            border: '1px solid #E5AC3C',
            padding: '10px',
            borderRadius: '20px',
            color: '#E5AC3C',
        }
    },
});

const TopNav = () => {

    const navigate = useNavigate();
    useEffect(() => {
        // animateBanner();
    }, []);

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.topNav}>
                {/* Left Logo and BagelDB */}
                <div className={classes.bagel}>
                    <div className={classes.bagelWrapper} onClick={() => navigate("/")} style={{ cursor: 'pointer' }}> <img src={Bagel} width={44} height={41} alt={"logo"} /> Bagel<strong>DB</strong></div>
                </div>
                {/* Right Navigation */}
                <div className={classes.rightNavigation}>
                    <Link to="features">Features</Link>
                    <Link to="about_us">About Us</Link>
                    <Link to="faq">FAQ</Link>
                    <Link to="#contact_us">Contact Us</Link>
                    <span className={classes.demoBeta}>
                        <Link to="bagel-console">See Demo</Link>
                        <Link to="join_beta">Join Beta</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
