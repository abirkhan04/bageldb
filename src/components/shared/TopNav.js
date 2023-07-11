import { makeStyles } from "@mui/styles";
import Bagel from '../../assets/bagel.PNG'

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
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white'
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

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.topNav}>
                {/* Left Logo and BagelDB */}
                <div className={classes.bagel}>
                    <a className={classes.bagelWrapper} href="#home" style={{ cursor: 'pointer' }}> <img src={Bagel} width={44} height={41} alt={"logo"} /> Bagel<strong>DB</strong></a>
                </div>
                {/* Right Navigation */}
                <div className={classes.rightNavigation}>
                    <a href="#features">Features</a>
                    <a href="#about_us">About Us</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact_us">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
