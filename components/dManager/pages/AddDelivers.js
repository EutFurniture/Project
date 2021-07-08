import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import clsx from 'clsx';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';


import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { mainListItems, Logout } from './listItems';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Eut Furniture
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor:'#ede7f6'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    alignContent:'center',
    align:'center',
    
  },
  paper: {
    position:'relative',
    align:'center',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
   
  },
  fixedHeight: {
    height: 240,
  },
  
}));

const styles = {
  side:{
    backgroundColor:'#5e35b1',
  },
  pack:{
    justifyContent:'flex-around',
    marginLeft:'20px'
  }  ,
  button_style:{
    display:'flex',
    justifyContent:'space-between',
  }
  
};



export default function AddDelivers() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

   const [fullname, setName]= useState("");
   const [nationalid, setNic]= useState("");
   const [email, setEmail]= useState("");
   /*const [image, setImage]= useState("");*/
   const [address, setAddress]= useState("");
   const [mobile, setMobile]= useState("");
   const [password, setPassword]= useState("");
   const [cpassword, setcPassword]= useState("");

    const addDeliver = () => {
      Axios.post('http://localhost:3001/create', {
        fullname: fullname,
        nationalid: nationalid,
        email: email,
        address: address,
        mobile: mobile,
        password: password,
        cpassword: cpassword
      }).then(() => { 
        console.log("success");
      });
    };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} style={{backgroundColor: '#5e35b1'}}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <strong>DELIVERY MANAGER</strong>
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={styles.side}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} style={{backgroundColor: '#5e35b1', color:'white'}}>
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List style={{backgroundColor: '#5e35b1', color:'white'}}>{mainListItems}</List>
        <Divider />
        <List style={{backgroundColor: '#5e35b1', color:'red'}}>{Logout}</List>
        <Divider />
      </Drawer>
      </div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
        
            
            

            {/* Recent Orders */}
            <Grid item xs={10} style={styles.pack} >
            
  
            <div >
              <Paper className={classes.paper}>
              <Typography component="h1" variant="h6" color="inherit"  width="100%" noWrap className={classes.title}>
              <strong>ADD NEW DELIVER PERSON</strong>
            </Typography><br/>

                 <Form >
                    <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column lg={2} >
                        Full Name :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Full Name" 
                        onChange={(event)=> {
                          setName(event.target.value);
                        }}
                        />
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalNIC">
                      <Form.Label column lg={2}>
                        National ID :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="National ID" 
                        onChange={(event)=> {
                          setNic(event.target.value);
                        }}
                        />
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column lg={2}>
                        Email :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" 
                        onChange={(event)=> {
                          setEmail(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>
                 
                    {/*<Form.Group as={Row} controlId="formHorizontalFile" className="mb-3">
                      <Form.Label column lg={2}>
                        Image :</Form.Label>
                      <Col sm={10}>
                        <Form.Control type="file" 
                        onChange={(event)=> {
                          setImage(event.target.value);
                        }}/>
                      </Col>
                      </Form.Group>*/}


                    <Form.Group as={Row} controlId="formHorizontaladdress">
                      <Form.Label column lg={2}>
                        Address :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Address" 
                        onChange={(event)=> {
                          setAddress(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalphone">
                      <Form.Label column lg={2}>
                        Mobile Number :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="0761234565" 
                        onChange={(event)=> {
                          setMobile(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column lg={2}>
                        Password :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" 
                        onChange={(event)=> {
                          setPassword(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>

                    <Form.Group as={Row} controlId="formHorizontalcPassword">
                      <Form.Label column lg={2}>
                        Confirm Password :
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="password" placeholder="Confirm Password" 
                        onChange={(event)=> {
                          setcPassword(event.target.value);
                        }}/>
                      </Col>
                    </Form.Group><br/>                   

                    
                        <div  style={styles.button_style}>
                        <Button  type="submit" size='lg' href='/ManageDelivers'>View All</Button>
                        <Button  type="submit" size='lg' onClick={addDeliver}>Add Deliver</Button>
                        </div>
           
                </Form>
            
              </Paper>
              </div>
            </Grid>
 
          </Grid>
          
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

