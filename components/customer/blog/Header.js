import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Feedback from '@material-ui/icons/Feedback';
import Redeem from '@material-ui/icons/Redeem';
import ListAlt from '@material-ui/icons/ListAlt';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Modal from '@material-ui/core/Modal';
import Pay from '../Products/Pay'
import {Redirect} from 'react-router-dom';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
 
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    backgroundColor:'rgb(226, 226, 230)',
    color:'black',
    marginTop:theme.spacing(3),
    padding:"1%",
  },
  toolbarTitle:{
    fontWeight:'bold',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:'none',
    '&:focus':{
      backgroundColor:'black',
      color:'white',
     textDecoration:'none',
    },
    '&:hover':{
      backgroundColor:'black',
      color:'white',
     textDecoration:'none',
    }
  },

  
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);



export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  
  const [anchorEl, setAnchorEl] = React.useState(null );
  const [isAuth, setIsAuth]= React.useState(true);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  
  const  logout = (req,res) => {
    req.session.destroy((err) =>{
       res.redirect('/landing');
    })
};
  
if(!isAuth){
  return <Redirect to='/landing' />
}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloses= () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}  onClose={handleCloses}>
      <h2 id="simple-modal-title"> Gift Data</h2>
      <p id="simple-modal-description">
      You can get your gift based on your point.check below...
      </p>
     <Pay    onClick={handleCloses} />
    </div>
  );

  return (
    <React.Fragment>
    
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='/customer/'
            className={classes.toolbarLink}
          >
            Home
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='/about'
            className={classes.toolbarLink}
          >
            About Us
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='/product'
            className={classes.toolbarLink}
          >
           Product
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='/customization'
            className={classes.toolbarLink}
          >
           Customization
          </Link>

          <div>
          <Link
            color="inherit"
            noWrap
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
            variant="body2"
            href='#'
            className={classes.toolbarLink}
          >
           My Account
          </Link>
          <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon >
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <Link color="inherit"  className={classes.toolbarLink} variant="body2" href="/profile"><ListItemText primary="Profile" /></Link>
        </StyledMenuItem>   
        <StyledMenuItem onClick={handleClose}>     
        <ListItemIcon >
            <ListAlt fontSize="small" />
          </ListItemIcon>
          <Link color="inherit"  className={classes.toolbarLink} variant="body2" href="/history"><ListItemText primary="Order History" /></Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>     
        <ListItemIcon >
            <Feedback fontSize="small" />
          </ListItemIcon>
          <Link color="inherit"  className={classes.toolbarLink} variant="body2" href="/feedback"><ListItemText primary="Feedback" /></Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <Redeem fontSize="small" />
          </ListItemIcon>
          <div>
         <Link color="inherit" className={classes.toolbarLink}  variant="body2" onClick={handleOpen}> <ListItemText primary="Gift Data" /></Link>
         <Modal
        open={open}
        onClose={handleCloses}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      </div>
        </StyledMenuItem>
       
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
         <Link color="inherit" href="/landing"  variant="body2" className={classes.toolbarLink} onClick={() =>setIsAuth(false)}> <ListItemText primary="Logout" /></Link>
        </StyledMenuItem>
      </StyledMenu>
         
        </div>
       
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
