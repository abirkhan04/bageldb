import { makeStyles } from "@mui/styles";
import Background from "../../assets/background.PNG";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${Background})`
    },
    body: {
        width: '70%',
        borderRadius: '10px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px'
    },
    demoBeta: {
        color: '#E5AC3C',
        fontWeight: 'bold',
        marginTop: '30px',
        '& a': {
            textDecoration: 'none',
            border: '1px solid #E5AC3C',
            padding: '10px 30px',
            borderRadius: '25px'
        }
    },
    beta: {
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '20px',
        backgroundColor: '#E5AC3C',
    },
    demo: {
        color: '#E5AC3C',
        fontWeight: 'bold',
        borderRadius: '20px',
        border: '1px solid #E5AC3C',
        marginLeft: '10px'
    },
});

const Invitation = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div style={{ fontSize: 36, fontWeight: 'bold', width: '50%', color: '#E5AC3C', textAlign: 'center' }}>
                    Experience the Future of AI with BagelDB
                </div>
                <div style={{ fontSize: '18px' }}>join the waitlist now to be at the forefront of the revolution</div>
                <div className={classes.demoBeta}>
                    <Link to="join_beta" className={classes.beta}>Join Beta</Link>
                    <Link to="bagel-console" className={classes.demo}>See Demo</Link>
                </div>
            </div>
        </div>);
};

export default Invitation;
