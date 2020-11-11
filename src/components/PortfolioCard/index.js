import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    objectFit: "cover"
  },
});

export default function PortfolioCard(props) {
    const classes = useStyles();
    const {image, title, desc, date, github, deployed} = props.data

    return (
    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image={image}
        />
        <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
            {date}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
            {desc}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary" href={github}>
            Github
        </Button>
        <Button size="small" color="primary" href={deployed}>
            Deployed
        </Button>
        </CardActions>
    </Card>
    );
}
