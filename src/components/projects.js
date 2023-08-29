import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from 'styled-components';
import { zoomIn, flipInX } from 'react-animations'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
  const classes = useStyles();
  const ZoomIn = styled.div`animation:1s ${keyframes`${zoomIn}`} 1`;
  return (
    <ZoomIn>
      <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>Academic Projects</h1>
      <hr />
      <div className="row">
        <div className="col-sm-4 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/project1.jpeg")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  GameFi
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Static website to show the GameFi products, their teams careers and blog
                          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://game-fi-app.web.app/" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>
        {/* <div className="col-sm-2 col-12"></div> */}
        <div className="col-sm-4 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/Project2.jpeg")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Atalon
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A basic website of Atalon. The site have company Info, their business statistics, games news of 2022 and more.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://atalon-web.web.app/" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="col-sm-4 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/project3.jpeg")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Grocery Site
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A Grocery website where grocery products available. We can order it by add to cart and then proceed to checkout. The order history maintains in order page of users account. 
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://grocery-web-app.herokuapp.com/" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    
    </ZoomIn>
  );
}
