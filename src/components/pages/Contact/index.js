import { Grid, Button, makeStyles } from "@material-ui/core";
import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import ContactCard from '../../ContactCard'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Contact(props) {
const classes = useStyles();
  
  return (
    <Backdrop className={classes.backdrop} open={props.open} onClick={props.handleClose}>
      <ContactCard />
    </Backdrop>
  );
  //         <sl-button href="https://github.com/clubkemp" target="blank" type="primary"> Github
  //                                     </sl-button>
  // <sl-button href="https://www.linkedin.com/in/jonny-kemp/" target="blank"
  //                                         type="success">LinkedIn</sl-button>
  // <sl-button
  //                                         href="https://www.dropbox.com/s/gzpwk5jihp2l74j/Kemp.pdf?dl=0"
  //                                         target="blank" type="warning">Resume</sl-button>
  // <sl-button class="trigger" type="info">Email</sl-button>
  //     )
}
