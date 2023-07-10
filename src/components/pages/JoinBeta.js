import React from 'react'
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: 'calc(100vh - 80px)'
        },
        submit: {
            height: '40px',
            cursor: 'pointer',
            backgroundColor: '#F3B02E',
            borderRadius: '6px',
            border: 'none',
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            marginLeft: '10px'
        },
});

const JoinBeta = ()=> {
    const [emailAddress, setEmailAddress] = React.useState("");
    const onTextChange = (e) => setEmailAddress(e.target.value);

    console.log(emailAddress);
     const classes = useStyles();
        return <div className={classes.root}><TextField
          required
          color="primary"
          id="outlined-required"
          label="Email address"
          placeholder='Email address'
          value={emailAddress}
          onChange={onTextChange}
      />
      <button className={classes.submit} variant="contained">Submit</button>
      </div>
}

export default JoinBeta;
