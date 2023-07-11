import { makeStyles } from "@mui/styles";
import Bagel from '../../assets/bageldb_box.PNG';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 65px)',
        backgroundColor: '#e5ac3c',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        marginLeft: '10',
        marginTop: '20px'
    },
    bagel: {
        backgroundColor: 'black',
        fontSize: '30px'
    },
    bagelImage: {
        maxHeight: '100%',
        width: 'auto'
    }

    /* ABC 2 1 */


});

const AboutUs = () => {

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15%', marginRight: '15%' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.header} style={{ fontSize: '36px', display: 'flex', alignItems: 'flex-start', }}>
                        About Us
                    </div>
                    <div className={classes.body}>
                        <p style={{width: "120%"}}>In the realm of AI, centralized vector databases pose daunting challenges. They're like insatiable beasts, gobbling up GPU resources, inhibiting collaboration and locking data in rigid structures. The costliness, the lack of portability, and the stifling isolation of data silos; these are the heavy chains that have held back the true potential of AI development.</p>
                        <p style={{width: "120%"}}>
                            Then, BagelDB arrives. This revolutionary, decentralized vector database unleashes a refreshing wave of innovation, cutting GPU costs by an order of magnitude, fostering open-source collaboration, and enhancing data portability. It's a beacon of hope, a promise of a vibrant, cost-effective future in the AI world. The limitations of the past dissolve, replaced by the unlimited potential of BagelDB. Welcome to the future, unchained and unstoppable.
                        </p>
                    </div>
                    <div style={{fontSize: 29, borderLeft: '5px solid black', width: '45%', paddingLeft: '20px', fontWeight: 'bold'}}>
                        Welcome to the future unchained and unstoppable
                    </div>
                </div>
                <img src={Bagel} alt="bagel" className={classes.bagelImage} height={'100%'} width={'auto'}/>
            </div>
        </div>);
};

export default AboutUs;
