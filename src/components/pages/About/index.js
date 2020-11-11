import React from 'react'
import Grid from '@material-ui/core/Grid'
import bananas from '../../../images/bananas.jpg'
import AboutCard from '../../AboutCard'

export default function About (){
    const [interests, setInterests] = React.useState([
        {
            name: "GIS",
            text:"Geographic Information Sciences. Using geospatial information to empower decision making"
        },
        {
            name: "Coding",
            text:"The thrill of building custom applications (usually geospatial) is hard to beat"
        },
        {
            name: "Data Geeking",
            text:"Give me a good piece of data. Lets dig into it, have some fun and get some data viz going."
        },
        {
            name: "Outdoor play",
            text:"Close the laptop and crank some peddles, hop on a surfboard, or strap on some skis. It does the mind and body well"
        },
        {
            name: "Photography",
            text:"Am I good at it? No. Do I do it often? No. Do I enjoy it. Yes."
        },
        {
            name: "Tinkering",
            text:"From building campers, to remodeling a bathroom, to repairing bikes. If I can break it, I enjoy tinkering on it"
        },
    ]);
    
    return(
        <Grid container>
            <Grid item lg={2}/>
            <Grid item lg={8}>
                <Grid container direction="column" alignItems="center">
                    <h2>About me</h2>
                    <img src={bananas}alt="Jonny Kemp in Banana shirt" />
                </Grid>
                <p>I Geek out over Geography, make maps, crunch numbers/code on computers, and generally play
                around with stuff. Life is short so do what you love, and I love a lot of different things.
                So I thought I would build a website to show off some of the exploits my monkey brain comes
                up with from time to time. This is a constant work in progress. It serves as a repository
                for me to brain dump all things work, life, and play. None of it is exhaustive or meant to
                be a walk through, but if you have questions about any of it please reach out to me.
                </p>
                <p>When I am not working on maps, or coding on computers I enjoy the outdoors. Hiking,
                backpacking, biking, surfing, fishing, etc. I also enjoy cooking and building DIY projects.
                I think all of these things are important to keep your brain well lubricated and balanced
                for complicated tasks like coding and developing.
                </p>
                <Grid container justify="center">
                    <h2>What I love Doing</h2>
                </Grid>
                <Grid container spacing={3} justify="center">
                    {interests.map(e=>{
                        return(
                            <Grid item sm={6} lg={4}>
                                <AboutCard data={e}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>   
            <Grid item lg={2}/>
        </Grid>
     )
}