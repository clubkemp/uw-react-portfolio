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

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container xs={12}>
          <Grid item xs={11}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="About" {...a11yProps(0)} />
              <Tab label="Portfolio" {...a11yProps(1)} />
              <Tab label="Contact" {...a11yProps(2)} />
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
        {/* <Portfolio /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Contact /> */}
      </TabPanel>
    </div>
  );
}
