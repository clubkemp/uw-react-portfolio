import React from 'react'
import Grid from '@material-ui/core/Grid'
import PortfolioCard from '../../PortfolioCard'
import { Description } from '@material-ui/icons';

import freshairImg from '../../../images/freshair.JPG'
import mixrImg from '../../../images/mixrLogoSmall.png'
import employeeImg from '../../../images/employee.JPG'
import fitnessImg from '../../../images/fitneesGuru.jpg'
import sheet2mapImg from '../../../images/sheets2map.JPG'
import scheduleImg from '../../../images/schedule.JPG'
import weatherIMg from '../../../images/Weather.JPG'

export default function About (){
    const [portfolio, setPortfolio] = React.useState([
        {
            image:employeeImg,
            title:"Employee Directory",
            desc: "First build/deploy using React",
            date: "20201106",
            github:"https://github.com/clubkemp/uw-employee-directory",
            deployed: "https://jk-employee-directory.herokuapp.com/"
         },
         {
            image:fitnessImg,
            title:"Fitness Guru",
            desc: "A fun little MongoDB/Mongoose/Express app for tracking fitness",
            date: "20201106",
            github:"https://github.com/clubkemp/uw-workoutTracker",
            deployed: "https://stark-tundra-18774.herokuapp.com/"
         },
        {
           image:mixrImg,
           title:"Mixr",
           desc: "A cocktail search engine tailored to what you have on hand",
           date: "20201028",
           github:"https://github.com/UnexpectedGoat/mixr",
           deployed: "https://mixr-cocktail-app.herokuapp.com/createcocktail"
        },
        {
            image:freshairImg,
            title:"Fresh Air",
            desc: "A Recreation/beer finder using Materialize and JQuery",
            date: "20200925",
            github:"https://github.com/clubkemp/freshair",
            deployed: "https://clubkemp.github.io/freshair"
         },
         {
            image:sheet2mapImg,
            title:"Sheets2Map",
            desc: "Go ahead, give your google sheets some map swag",
            date: "20200411",
            github:"https://github.com/clubkemp/sheets2map",
            deployed: "https://clubkemp.github.io/sheets2map"
         },
         {
            image:weatherIMg,
            title:"Weather Dashboard",
            desc: "First build using Pure CSS, as well as calling my first API",
            date: "20200921",
            github:"https://github.com/clubkemp/uw-weather",
            deployed: "https://clubkemp.github.io/uw-weather"
         },
         {
            image:scheduleImg,
            title:"Day Planner",
            desc: "Persistant local storage for a day schedule",
            date: "20200918",
            github:"https://github.com/clubkemp/uw-schedule",
            deployed: "https://clubkemp.github.io/uw-schedule"
         }
    ]);
    
    return( 
    <Grid container>
        <Grid item lg={2}/>
        <Grid item lg={8}>
        <Grid container spacing={5}>
            <Grid container justify="center">
                <h2>Portfolio</h2>
            </Grid>
            {portfolio.map(e=>{
                return(
                <Grid item sm={6} lg={4}>
                    <PortfolioCard data={e}/>
                </Grid>
                 )
            })}
            
        </Grid>
        </Grid>
        <Grid item lg={2}/>
    </Grid>
       
     )
}