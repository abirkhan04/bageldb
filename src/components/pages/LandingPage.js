import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Bagel from '../../assets/bagel.PNG';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#050505',
    },
    body: {
        width: '100vw',
        height: 'calc(100vh - 65px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bagel: {
        display: 'flex',
        alignItems: 'center',
        width: '390px'
    },
    demoBeta: {
        color: '#E5AC3C',
        fontWeight: 'bold',
        marginTop: '20px',
        '& a': {
            textDecoration: 'none',
            border: '1px solid #E5AC3C',
            padding: '10px',
            borderRadius: '20px'
        }
    },
    beta: {
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '20px',
        backgroundColor: '#E5AC3C',
        padding: '10px'
    },
    demo: {
        color: '#E5AC3C',
        fontWeight: 'bold',
        borderRadius: '20px',
        padding: '10px',
        border: '1px solid #E5AC3C',
        marginLeft: '10px'
    },
    bodyWriting: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '63px',
      
    },
    textWrapper: {
        width: '510px',
        height: '383px',
        '& p': {
            color: '#969696'
        }
    },
    bodyBagel: {
        marginLeft: '30px'
    }
});

const Landing = () => {

    useEffect(() => {
        // animateBanner();
    }, []);

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.textWrapper}>
                    <div className={classes.bodyWriting}>World's First Collaborative Vector Database</div>
                    <div style={{ color: '#969696' }}>
                        A collaborative vector database designed to Cut data processing spend via collaboration and
                        Data ownership.
                    </div>
                    <div className={classes.demoBeta}>
                        <Link to="join_beta" className={classes.beta}>Join Beta</Link>
                        <Link to="bagel-console" className={classes.demo}>See Demo</Link>
                    </div>
                </div>
                <div className={classes.bodyBagel}>
                    <img src={Bagel} width={400} height={376} alt={'bagel'}/>
                </div>
            </div>
        </div>
    );
};

export default Landing;
