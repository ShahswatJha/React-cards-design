import React from 'react'
import Response from '../Response.json'
import Container from '@material-ui/core/Container'
import { Grid, Paper } from '@material-ui/core';
import CardData from './CardData';


function Cards() {
    const someData = Response;
    console.log(Response)
    return (
        <Container>
            <Grid container spacing={3}>
                
                {
                    someData.map((res,index) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                 {/* <Paper>{index} {res["title"]}</Paper> */}
                                 <CardData data={res}/>
                            </Grid>
                        )
                    })
                }
               
            </Grid>
        </Container>
    )
}

export default Cards




