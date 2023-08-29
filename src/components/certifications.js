import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '46.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Certification() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>Achievements & Certificates</h1>
      <hr />
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="certificate-panel">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>programming Fundamental</Typography>
          <Typography className={classes.secondaryHeading}>Coursera Course Certificate</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img src={require("../images/Coursera1.jpeg")} width="100%" style={{ maxHeight: 500 }} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="certificate-panel">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Python Programming: A Concise Introduction
</Typography>
          <Typography className={classes.secondaryHeading}>
            Coursera Course Certificate
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img src={require("../images/Coursera2.jpeg")} width="100%" style={{ maxHeight: 500 }} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="certificate-panel">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>BASIC ENGLISH 2: PRE-INTERMEDIATE </Typography>
          <Typography className={classes.secondaryHeading}>FutureLearn Course Certificate</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img src={require("../images/EngCert.jpeg")} width="100%" style={{ maxHeight: 500 }} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

    
    </div>
  );
}
