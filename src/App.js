import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import ContactCard from './components/ContactCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
  },

}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [page, setPage] =React.useState("about");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue === 0){
      setPage("about")
    }else if(newValue === 1){
      setPage("portfolio")
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container xs={12}>
          <Grid item xs={11}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="About" {...a11yProps(0)} />
              <Tab label="Portfolio" {...a11yProps(1)} />
              <Tab label="Contact" {...a11yProps(2)} onClick={handleToggle}/>
            </Tabs>
          </Grid>
          <Grid item xs={0} sm={1} alignItems="center" justifyContent="center">
            <Typography variant="h6" className={classes.title}>
              Jonny Kemp
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Portfolio />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {page ==="about" ? <About /> : <Portfolio />}
        <Contact open={open} handleClose={handleClose}/>
      </TabPanel>
    </div>
  );
}





// export default function SimpleBackdrop() {
//   const classes = useStyles();
  

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleToggle}>
//         Show backdrop
//       </Button>
//       
//     </div>
//   );
// }
