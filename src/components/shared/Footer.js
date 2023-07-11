import { makeStyles } from "@mui/styles";
import Bagel from '../../assets/bagel.PNG';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: '#000000',
        padding: '50px'
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
    contactUs:  {
        textDecoration: 'none',
        border: '1px solid #E5AC3C',
        padding: '10px 30px',
        borderRadius: '25px',
        color: '#E5AC3C',
        marginTop: '40px',
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 12,
      '& a': {
        textDecoration: 'none',
        color: 'white',
        marginBottom: '4px',
        opacity: '0.7'
      }
    }
});

const Footer = () => {
    const classes = useStyle();
    const white = {color: 'white', marginLeft: '6px'}
    const textFont = {fontSize: '16px', color: 'white'}
    const smallerFont = {fontSize: 14, color: 'white', opacity: '0.7'};
    return (
        <div className={classes.root}>
            <div style={{width: '25%'}}>
                <div className={classes.bagel}>
                    <a className={classes.bagelWrapper} href="#home" style={{ cursor: 'pointer' }}> <img src={Bagel} width={44} height={41} alt={"logo"} /> Bagel<strong>DB</strong></a>
                </div>
                <div style={{fontSize: 16, color: 'white'}}>Don't wait. Contact us now to learn more about our services</div>
                <div style={{marginTop: '20px'}}><a href="contact_us" className={classes.contactUs}>Contact Us</a></div>
                <div style={{marginTop: '20px'}}><FacebookIcon sx={{color: 'white'}}/>
                 <LinkedInIcon sx={white}/> <InstagramIcon sx={white}/><YouTubeIcon sx={white}/><TwitterIcon sx={white}/><PinterestIcon/></div>
                <div style={{fontSize: 14, color: 'white', opacity: '0.7'}}>@2023, All rights reserved.</div> 
            </div>
            <div>
                <div style={textFont}>Address</div>
                <div style={{...smallerFont, marginTop: '4px'}}>c/o eNavis AG, Newzealand </div>
                <div style={{marginTop: '20px', ...textFont}}>Contact</div>
                <div style={{...smallerFont, textDecoration: 'underline', marginTop: '4px'}}>9890221325</div>
                <div style={{...smallerFont, textDecoration: 'underline', marginTop: '4px'}}>info@bageldb.ai</div>
            </div>
            <div className={classes.link}>
                <a href="/#home">Home </a>
                <a href="/#">How it works </a>
                <a href="/#about_us">About</a>
                <a href="/#faq">FAQ</a>
                <a href="/join_beta">Join waitlist</a>
            </div>
            <div className={classes.link}>
                <a href="/#">Terms & Conditions </a>
                <a href="/#">Privacy Policy </a>
                <a href="/#">Cookies Policy</a>
            </div>
        </div>);
};

export default Footer;
