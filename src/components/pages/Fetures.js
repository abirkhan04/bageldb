import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.PNG";
import image3 from "../../assets/3.PNG";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 65px)',
        backgroundColor: '#e5ac3c',
    },
    header: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
    body:  {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        marginLeft: '10',
        marginTop: '20px'
    }
});

const Features = () => {

    useEffect(() => {
        // animateBanner();
    }, []);

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div style={{fontFamily: 'Manrope',fontSize: '18px'}}>
                      Features
                </div>
                <div style={{fontFamily: 'Manrope', fontSize: '36px'}}>
                     Features That Make BagelDB a Great Tool
                </div>
            </div>
            <div className={classes.body}>
                <div style={{paddingRight: '30px'}}>
                    <img src={image1} alt="img1"/>
                    <div style={{fontWeight: 'bold', fontSize: '22px'}}>Decentralized Architecture</div>
                    <p style={{fontFamily: 'ubuntu', fontSize: '16px'}}>Break free from centralized constraints and experience the benefits of a decentralized vector database that empowers efficient AI processing and eliminates resource bottlenecks.</p>
                </div>
                <div style={{paddingRight: '30px'}}>
                    <img src={image2} alt="img2"/>
                    <div style={{fontWeight: 'bold', fontSize: '22px'}}>Enhanced Collaboration</div>
                    <p style={{fontFamily: 'ubuntu', fontSize: '16px'}}>Foster open-source collaboration like never before by seamlessly sharing and accessing vector data, enabling AI developers to work together, accelerate innovation, and drive breakthroughs</p>
                </div>
                <div style={{paddingRight: '30px'}}>
                     <img src={image3} alt="img3"/>
                     <div style={{fontWeight: 'bold', fontSize: '22px'}}>Seamless Data Portability</div>
                    <p style={{fontFamily: 'ubuntu', fontSize: '16px'}}> Enjoy unparalleled flexibility and freedom with BagelDB's seamless data portability, allowing you to effortlessly move and use your vector data across various platforms and frameworks without any limitations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
