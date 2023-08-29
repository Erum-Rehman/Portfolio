import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Avatar from '@material-ui/core/Avatar';
import Profile from './profile';
import About from './about';
import Resume from './resume';
import Certification from './certifications';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100%)`,
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
}));

const SKILLS = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "Sass", level: 98 },
  { type: "BootStrap", level: 98 },
  { type: "React.js", level: 85 },
  { type: "Redux", level: 85 },
  { type: "JavaScript", level: 75 },
  { type: "Unit Testing", level: 75 },
  { type: "Firebase", level: 75 },
  { type: "Node.js", level: 75 },
  { type: "Express.js", level: 70 },
  { type: "MySQL", level: 70 },
  { type: "SQL Server", level: 70 },
  { type: "React Native", level: 65 },
  { type: "MongoDB", level: 60 },
];
export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <div style={{ backgroundColor: 'transparent!important' }}>
            <IconButton
              style={{ marginLeft: 30 }}
              color="white"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            {/* <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography> */}
          </div>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Avatar alt="Anum Rehman" src={require("../images/pic1.jpeg")} className={classes.large} />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>

          </div>
          <Divider />
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
            <Link exact to="/">
              <ListItem button>
                <ListItemIcon><PersonIcon /> </ListItemIcon>
                <ListItemText primary="Profile" className="main-links" />
              </ListItem>
            </Link>
            <Link to="/about" >
              <ListItem button>
                <ListItemIcon><InfoIcon /> </ListItemIcon>
                <ListItemText primary="About" className="main-links" />
              </ListItem>
            </Link>
            <Link to="/resume" >
              <ListItem button>
                <ListItemIcon><DescriptionIcon /> </ListItemIcon>
                <ListItemText primary="Resume" className="main-links" />
              </ListItem>
            </Link>
            <Link to="/skills" >
              <ListItem button>
                <ListItemIcon><SettingsIcon /> </ListItemIcon>
                <ListItemText primary="Skills" className="main-links" />
              </ListItem>
            </Link>
            <Link to="/certification">
              <ListItem button>
                <ListItemIcon><SchoolIcon /> </ListItemIcon>
                <ListItemText primary="Certifications" className="main-links" />
              </ListItem>
            </Link>

            <Link to="/project">
              <ListItem button>
                <ListItemIcon><AssignmentIndIcon /> </ListItemIcon>
                <ListItemText primary="Projects" className="main-links" />
              </ListItem>
            </Link>
            <Link to="/contact" >
              <ListItem button>
                <ListItemIcon><ContactMailIcon /> </ListItemIcon>
                <ListItemText primary="Contact" className="main-links" />
              </ListItem>
            </Link>
            {/* ))} */}
          </List>
          {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>

            <Route path="/skills">
              <Skills hue="200" saturation="50" skills={SKILLS} />
            </Route>

            <Route path="/certification">
              <Certification />
            </Route>

            <Route path="/project">
              <Projects />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
