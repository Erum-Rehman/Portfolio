import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations'

export default function About() {
  const ZoomIn = styled.div`animation:2s ${keyframes`${zoomIn}`} 1`;
  return (

    <div className="main-content">
      <br />
      <h1>ABOUT ME</h1>
      <hr />
      <ZoomIn>
        <Card >
          <CardActionArea>
            <CardContent>
              <img src={require("../images/about.jpg")} style={{ width: '100%' }} />
              <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Coiny', fontSize: 32 }}>
                Erum Rehman
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                As a Frontend Developer I have 1+ year of experience in designing, developing and implementing applications and solutions using a range of technologies and programming languages. I have proven experience in developing consumer-focused websites using
                HTML, CSS, SASS, Reactjs, Redux state management, and JavaScript. Designed and developed web applications across multiple APIs, thirdparty integrations. I am a
                collaborative team player. Contributing to the team and grasping new ideas to the team are my key to success. I always eager to learn and implement new things in life.          
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ZoomIn>
    </div>
  )
}