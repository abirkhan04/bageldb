import { makeStyles } from "@mui/styles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000000',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: '36px',
        width: '30%'
    },
    body: {
        width: '70%',
        marginTop: '20px'
    }
});

const FAQ = () => {
    const classes = useStyle();
    const accordionColors = {
        backgroundColor: "black",
        color: 'white',
        borderBottom: '1px solid white'
    };
    const white = { color: 'white' };
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                Frequently Asked Question
            </div>
            <div className={classes.body}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={accordionColors}
                    >
                        <Typography>What is BagelDB?</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={accordionColors}
                    >
                        <Typography>
                            BagelDB is a revolutionary decentralized vector database designed specifically for the field of artificial intelligence (AI). It offers a groundbreaking approach to storing and managing vector data, eliminating the limitations and challenges associated with centralized databases. BagelDB provides a scalable and efficient solution that empowers AI developers to unleash the true potential of their projects by optimizing resource usage and enabling seamless collaboration.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={accordionColors}
                    >
                        <Typography>How does BagelDB differ from centralized vector databases</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={accordionColors}
                    >
                        <Typography>What benefits does BagelDB offer for AI development?</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={accordionColors}
                    >
                        <Typography>Is BagelDB compatible with different platforms and frameworks?</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={accordionColors}
                    >
                        <Typography>How does BagelDB ensure data security in a decentralized environment?</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={accordionColors}
                    >
                        <Typography>Can I collaborate with others using BagelDB?</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={white} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={accordionColors}
                    >
                        <Typography>Does BagelDB support seamless integration and migration of existing vector data?</Typography>
                    </AccordionSummary>
                </Accordion>
            </div>
        </div>);
};

export default FAQ;
