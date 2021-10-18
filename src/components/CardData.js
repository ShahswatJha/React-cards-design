import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Card, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import {CircleProgress} from 'react-gradient-progress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box } from '@mui/system';


function CardData({data}) {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
    return (
        <div>
            {/* {data["title"]} */}
            <Card>
                <CardHeader title={<Typography variant={"h5"}>{data["id"]}</Typography>}/>
                <CardContent>
                    <Typography align="center">
                            <CircleProgress percentage={data["value"]} width={100} strokeWidth={7} primaryColor={['#2196f3', '#f44336']}/>
                            
                    </Typography>  
                    <Typography align="center">
                        {data["title"]}
                    </Typography>
                    <Typography variant="body2">
                        {data["body"]}
                    </Typography>
                    {/* Multiply priority by 20 */}
                    <Box m={2} pt={3}>
                        <BorderLinearProgress variant="determinate" value={50} />
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardData
