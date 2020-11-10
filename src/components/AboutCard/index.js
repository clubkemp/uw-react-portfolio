import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import BuildIcon from '@material-ui/icons/Build';
import { Icon } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AboutCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {name, text} = props.data
  
  useEffect(() => {
    switchIcon();
  });

  const switchIcon = ()=>{
    console.log(name)
    if(name==="GIS"){
      return <LanguageIcon />
    }else if(name==="Coding"){
      return <CodeIcon />
    }else if(name==="Data Geeking"){
      return <DataUsageIcon />
    }else if(name==="Photography"){
      return <PhotoCameraIcon />
    }else if(name==="Tinkering"){
      return <BuildIcon />
    }else if(name==="Outdoor play"){
      return <DirectionsBikeIcon />
    }
  }

  return (
    <Card className={classes.root} variant="outlined">
        <CardContent>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          {switchIcon()}
          <Typography variant="body2" component="p">
            {text}
          </Typography>
          </Grid>
        </CardContent>
    </Card>
  );
}