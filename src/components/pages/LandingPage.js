import { lazy } from 'react';
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Bagel from '../../assets/bagel.PNG';

const Features = lazy(() => import('./Fetures'));
const AboutUs = lazy(() => import('./AboutUs'));
const TopNav = lazy(() => import('../shared/TopNav'));
const Footer = lazy(()=> import('../shared/Footer'));
const Faq = lazy(()=> import('../pages/FAQ'));
const Invitation = lazy(()=> import('../pages/Invitation'));

/*Styling elements*/
const useStyle = makeStyles({
    root: {
        backgroundColor: '#050505',
    },
    body: {
        height: 'calc(100vh - 60px)',
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
    const classes = useStyle();
    return (
        <div>
            <section id="home">
                <TopNav />
                <div className={classes.root}>
                    <div className={classes.body}>
                        <div className={classes.textWrapper}>
                            <div className={classes.bodyWriting}>World's First Collaborative Vector Database</div>
                            <div style={{ color: '#969696', margin: '10px 0' }}>
                                A collaborative vector database designed to Cut data processing spent via collaboration and
                                Data ownership.
                            </div>
                            <div className={classes.demoBeta}>
                                <Link to="join_beta" className={classes.beta}>Join Beta</Link>
                                <Link to="bagel-console" className={classes.demo}>See Demo</Link>
                            </div>
                        </div>
                        <div className={classes.bodyBagel}>
                            <img src={Bagel} width={402} height={'auto'} alt={'bagel'} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="features">
                <Features />
            </section>
            <section id="about_us">
                <AboutUs />
            </section>
            <section id="faq">
                <Faq />
            </section>
            <section>
                <Invitation />
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default Landing;
