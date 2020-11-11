import { Grid, Button } from '@material-ui/core';
import React from 'react';

export default function ContactCard (){
    return(
        <Grid container direction="column" alignItems="center" spacing={6}>
            <Grid container item justify="center">
                <Button variant="contained" href="https://github.com/clubkemp" target="blank">Github</Button>
                <Button variant="contained" href="https://www.linkedin.com/in/jonny-kemp/" target="blank" color="primary">LinkedIn</Button>
                <Button variant="contained" href="https://www.dropbox.com/s/gzpwk5jihp2l74j/Kemp.pdf?dl=0" target="blank"color="secondary">Resume</Button>
            </Grid>
            <Grid item>
                <h1>Kempj2.jk@gmail.com</h1>
            </Grid>
        </Grid>
    )
} 